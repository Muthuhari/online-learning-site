import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import Contacts from "../Contacts/Contacts";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";

function UpdateCourse() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/courses/${id}`)
        .then((res) => res.data)
       .then(({ course }) => setInputs(course));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    const response = await axios.put(`http://localhost:5000/courses/${id}`, {
      name: inputs.name,
      description: inputs.description,
      cost: inputs.cost,
    });
    console.log(response.data); 
  };

  const handleChange = (e) => {
    setInputs((prevState) => {
      const newInputs = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      console.log('Updated inputs:', newInputs); 
      return newInputs;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log(inputs);
    await sendRequest().then(() => history('/coursedetails'));
  };

  return (
    <>
      <Nav />
      <>
      <div className="page-title">Update course</div>
      <form onSubmit={handleSubmit}>
       <Input
        label="Course Name"
        name="name"
        value={inputs.name || ''}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Course Details"
        name="description"
        value={inputs.description || ''}
        onChange={handleChange}
        required
      />

      <Input
        label="Cost"
        name="cost"
        value={inputs.cost || ''}
        onChange={handleChange}
        required
      />
        <div className="button-group">
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => history('/coursedetails')}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary submit">Submit</button> 
      </div>
      </form>
    </>
    <Contacts />
</>
  );
}

export default UpdateCourse;
