import React from "react";

import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaRegTimesCircle,
} from "react-icons/fa";

class ContactUs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="demo1" style={{ marginTop: "-5%" }}>
        <div className="container">
          <blockquote className="blockquote2">
            <h1>Contact Us :- Pavitra Mandir - Hemant Traders</h1>
            <h2>
              We love hearing from you ! Here are some of the ways to get in
              touch with us....
            </h2>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ContactUs;
