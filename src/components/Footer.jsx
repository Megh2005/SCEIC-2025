import React from "react";

const Footer = () => {
  function showAlert() {
    alert("Thank You For Subscribing.You Will Receive Further Alerts & Updates");
  }
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Heritage Institute of Technology<br/> Presents</h1>
          <p>Sustainable Civil Engineering & Infrastructural Construction 2025</p>
        </div>
        <div className="tag">
          <div onSubmit={showAlert}>
            <input required type="email" placeholder="Email Address" />
            <button onClick={showAlert}>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
