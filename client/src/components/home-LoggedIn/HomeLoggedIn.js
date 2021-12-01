import React from "react";
import Navbar from "../navbar/Navbar";
import illus from "../../assets/2.png";
import EventList from "../eventList/EventList";
import { Link } from "react-router-dom";

export default function HomeLoggedIn() {
  return (
    <>
      <Navbar />
      <div className="landing-main">
        <div className="row m-0">
          <div className="col-12 col-lg-5 col-md-5 col-sm-5 mt-2">
            <h1>Forget to wish your loved ones...</h1>
            <h6 className="text">
              Do you feel headache to remember birthdays and anniversaries ?{" "}
              <br />
              Add events now and enjoy.
              <br />
            </h6>
            <h3>Happy Greet!!!</h3>

            {/* <Link className="btn" to="/login">Get Started</Link> */}
            <Link to="/create-event">
              <button className="btncreate">Create events</button>
            </Link>
          </div>
          <div className="col-12 col-lg-7 col-md-7 col-sm-7 mt-4">
            <img className="img-fluid" src={illus} alt="" />
          </div>
        </div>
      </div>
      <EventList />
      <footer>
        <div class="foo">
          <i class="footer-icon fab fa-facebook-f fa-2x"></i>
          <i class="footer-icon fab fa-twitter fa-2x"></i>
          <i class="footer-icon fab fa-instagram fa-2x"></i>
          <i class="footer-icon fas fa-envelope fa-2x"></i>
          <p>© Copyright 2021 Greetings</p>
        </div>
      </footer>
    </>
  );
}
