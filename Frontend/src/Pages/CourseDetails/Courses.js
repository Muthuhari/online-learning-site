import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/courses";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Courses() {
  const [courses, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const componentRef = useRef();
  const navigate = useNavigate();
console.log(courses, "courses check");  
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.courses));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!")
  });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.courses.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    const phoneNumber = "+94768098273";
    const message = "Selected User drug report from here";
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(WhatsAppUrl, "_blank");
  };

  const handleAddCourse = () => {
    navigate("/addCourse");
  };

  const truncateText = (text, charLimit) => {
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };
const deleteHandler = async (id) => {
  await axios
    .delete(`http://localhost:5000/courses/${id}`)
    .then(() => navigate("/"))
    .then(() => navigate("/coursedetails"));
};
  return (
    <div>
      <Nav />
      <h1>My Teaching</h1>

      <div className="row mb-4">
        <div className="col-md-3">
          <button onClick={handleAddCourse} className="custom-btn">
            <i className="fas fa-plus me-2"></i> Add Course
          </button>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="input-group" style={{ maxWidth: "400px", width: "100%" }}>
            <span className="input-group-text bg-light border-primary rounded-start">
              <i className="fas fa-search text-primary"></i>
            </span>
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              name="search"
              placeholder="Search course details"
              className="form-control border-primary"
            />
          </div>
          <button
            onClick={handleSearch}
            className="btn-search ms-3 rounded"
            style={{ height: "38px" }}
          >
            Search
          </button>
        </div>

        <div className="col-md-3"></div>
      </div>

       {noResults ? (
        <p>No User Found</p>
      ) : (
        <div ref={componentRef} className="table-responsive">
          <table className="table table-bordered table-hover custom-table">
            <thead className="thead-light">
              <tr>
                <th>Course Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Average Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => {
                const { _id, name, description, cost } = course;

                return (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>{truncateText(description, 50)}</td>
                    <td>{cost}</td>
                    <td>{(Math.random() * 6).toFixed(1)}</td>
                    <td>
                      <Link to={`/coursedeatils/${_id}`}>
                        <i className="fas fa-eye text-success" style={{ cursor: "pointer" }}></i>
                      </Link>
                      <i
                      className="fas fa-trash-alt text-danger ms-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteHandler(_id)}
                    ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <Contacts />
    </div>
  );
}

export default Courses;
