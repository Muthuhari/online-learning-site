import React from "react";
import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure this is imported for the JavaScript functionality

import '@fortawesome/fontawesome-free/css/all.css'; 
import Home from "./Pages/Home/Home";
import AddCourse from "./Pages/AddCourse/AddCourse";
import Courses from "./Pages/CourseDetails/Courses";
import UpdateCourse from "./Pages/UpdateCourse/UpdateCourse";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SendPdf from "./Pages/SendPdf/SendPdf";
import Imguploder from "./Pages/Imguploder/Imguploder";
import Course1 from "./Pages/courseh/1";
import AllCourses from "./Pages/NavBarItems/AllCourses";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/coursedetails" element={<Courses />} />
          <Route path="/allCourses" element={<AllCourses />} />
          <Route path="/conus" element={<ContactUs />} />
          <Route path="/sendpdf" element={<SendPdf />} />
          <Route path="/imgpart" element={<Imguploder />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/courseh/1" element={<Course1 />}/>
          <Route path="/coursedeatils/:id" element={<UpdateCourse />}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
