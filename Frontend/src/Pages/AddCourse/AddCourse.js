
import React,{useState} from "react";
import Nav from "../Nav/Nav";
import Contacts from "../Contacts/Contacts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";
import Form from "../../Components/Form";
import ButtonGroup from "../../Components/ButtonGroup";

const URL ="http://localhost:5000/courses";


function AddCourse() {
    const history = useNavigate();
    const [inputs, setInputs] = useState ({
        name:"",
        description: "",
        cost:"",

    })

    const handleChange =(e)=>{
      setInputs((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value,

      }))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history('/coursedetails'));
    }


    const sendRequest =async() =>{
      await axios.post("http://localhost:5000/courses",{
        name: String (inputs.name),
        description: String (inputs.description),
        cost: String (inputs.cost),
        address: String (inputs.address),      
      }).then(res => res.data);
    }

  return (
    <>
      <Nav />
      <>
      <div className="page-title">Create Course</div>
     <Form onSubmit={handleSubmit} >
      <Input
        label="Course Name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Course Details"
        name="description"
        value={inputs.description}
        onChange={handleChange}
        required
      />
      <Input
        label="Price"
        type="number"    
        name="cost"
        value={inputs.cost}
        onChange={handleChange}
        required
      />

         <ButtonGroup onCancel={() => history('/coursedetails')} />
    </Form>
      </>
    </>
  );
}

export default AddCourse;