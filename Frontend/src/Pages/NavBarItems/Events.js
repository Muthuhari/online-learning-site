import React, { useState, useRef } from 'react';
import Nav from '../Nav/Nav';
import Contacts from "../Contacts/Contacts";
import { useNavigate } from "react-router-dom";
  import SearchBar from "../../Components/SearchBar"; 
function Events() {
  return (
    <div>
  <Nav />
  <div className="text-center" style={{ marginTop: '50px' }}>
  No upcoming events. Please check back soon!
</div>

</div>
  );





}

export default Events;
