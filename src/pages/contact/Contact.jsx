import React, { useRef } from "react";
import "./Contact.css";
import img from "../../assets/img/phone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_myr3kp4",
        "template_u6zgtna",
        form.current,
        "rr9dxnXOskRUPFyUA"
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error(`${error}`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <>
      <header className="sub-header">
        <img src={img} alt="Image" />
        <div className="main-title">
          <h1>Contact Us</h1>
        </div>
      </header>
      <main className="contact">
        <div className="contact-wrapper">
          <div className="contact-left">
            <FontAwesomeIcon
              className="icon envelop"
              icon={faEnvelopeOpenText}
            />
            <p>
              If you have any questions or just want to get in touch ,use the
              form . We look forward to hearing from you!
            </p>
          </div>
          <div className="contact-right">
            <h1>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Your Name" name="name" required />
              <br />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />

              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <br />
              <button className="btn send-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
