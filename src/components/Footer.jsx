import React, { useState } from "react";

const Footer = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { email } = userData;
    if (email) {
      const res = fetch(
        "https://ncsceic-default-rtdb.firebaseio.com/subscription.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      if (res) {
        setUserData({
          email: "",
        });
        alert(
          "Thank You For Subscribing.You Will Receive Further Alerts & Updates"
        );
      } else {
        alert("Failed to subscribe");
      }
    } else {
      alert("All Fields are Mandatory");
    }
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>
            Heritage Institute of Technology
            <br /> Presents
          </h1>
          <p>
            Sustainable Civil Engineering & Infrastructural Construction 2025
          </p>
        </div>
        <div className="tag">
          <form method="POST" id="form">
            <div>
              <input
                name="email"
                required
                value={userData.email}
                onChange={postUserData}
                placeholder="Email Address"
              />
              <button onClick={submitData}>Subscribe</button>
            </div>
          </form>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
