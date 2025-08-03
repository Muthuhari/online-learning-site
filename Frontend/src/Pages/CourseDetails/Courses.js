import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import { useReactToPrint } from "react-to-print";
import IconButton from "../../Components/IconButton";
import SearchBar from "../../Components/SearchBar";

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
      <div className="page-title">My Teaching</div>

      <div className="row mb-4 justify-content-start">
        <div className="col-md-4">
        <IconButton onClick={handleAddCourse} iconClass="fas fa-plus">
          Create Course
        </IconButton>
        </div>
<div className="col-md-8">
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        </div>
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


    </div>
  );
}

export default Courses;
