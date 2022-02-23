import logo from './logo.svg';

import { useState, useEffect } from 'react';
import Axios from 'axios';
import './homeStyle.css';

function App() {
  return (
    <div className = "Menu">
     
      
      <h1 id = "text2">Book Slots</h1>
      <a href='#'><button type="button" className="btn btn-danger" id="button1">{">"}</button></a>
      <a href='#'><button type="button" className="btn btn-danger" id="button2">{">"}</button></a>
       <a href='#'><button type="button" className="btn btn-danger" id="button3">{">"}</button></a>
     <a href='#'><button type="button" className="btn btn-danger" id="button4">{">"}</button></a>
      <a href='#'><button type="button" className="btn btn-danger" id="button5">{">"}</button></a>
        <div className = "slot1">
          <h5 id ="text1">9am to 10am</h5>

        </div>
        <div className = "slot2">
          <h5 id ="text1">10am to 11am</h5>
        </div>
        <div className = "slot3">
          <h5 id ="text1">12pm to 1pm</h5>
        </div>
        <div className = "slot4">
          <h5 id ="text1">2pm to 3pm</h5>
        </div>
        <div className = "slot5">
          <h5 id ="text1">4pm to 5pm</h5>
        </div>
        <h4 id = "text3">Check Appointment' Status</h4>
        <a href='#'><button type="button" className="btn btn-danger" id="button6">{">"}</button></a>
       
      
      </div>
      
  );
}

export default App;
