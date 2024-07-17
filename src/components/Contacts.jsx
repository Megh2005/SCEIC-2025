import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j3l4v4q", "template_s0kbq2c", form.current, {
        publicKey: "cXqHbP6YoiH_kX0dL",
      })
      .then(
        () => {
          console.log("SUCCESS");
          alert("We Will Get Back To You Very Soon");
          const apply = document.getElementById("form");
          apply.reset();
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
  };

  return (
    <>
      <section className="container contact">
        <div className="banner">
          <div className="item">
            <h4>Office Address</h4>
            <p>
              Heritage Institute of Technology, Chowbaga Road, Anandapur,
              Kolkata : 700107
            </p>
          </div>
          <div className="item">
            <h4>Email Us</h4>
            <p>
              <a href="mailto:sourav.kar@heritageit.edu">
                sourav.kar@heritageit.edu
              </a>
              <br />
              <a href="mailto:subhasankar.chowdhury@heritageit.edu">
                subhasankar.chowdhury@heritageit.edu
              </a>
              <br />
              <a href="mailto:subhasankar.chowdhury@heritageit.edu">
                pujabasu.chaudhury@heritageit.edu
              </a>
            </p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>
              <a href="tel:+919073558349">Prof. Saurav Kar</a>
              <br />
              <a href="tel:+919836656484">Prof. [Dr.] Subha Sankar Chowdhury</a>
              <br />
              <a href="tel:+918910963192">Prof. [Dr.] Puja Basu Chowdhury</a>
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6529676289206!2d88.41622057616405!3d22.517199979531245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f58b9feec5%3A0x30f8067b73c45d8!2sHeritage%20Institute%20of%20Technology%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1721219767552!5m2!1sen!2sin"
              style={{
                border: 0,
                width: "100%",
                height: "525px",
                border: "2px blue solid",
                borderRadius: "1%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form id="form" ref={form} onSubmit={sendEmail}>
              <h2>Contact Us</h2>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                name="subject"
                required
              />
              <textarea
                rows={7}
                placeholder="Enter Message"
                name="message"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
