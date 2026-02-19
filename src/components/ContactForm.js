import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { useState } from "react";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    //Data obtained from our EmailJS account
    emailjs
      .sendForm("service_yqqpd0n", "template_gm683z2", form.current, {
        publicKey: "qRkQv_hziwcUUjz77",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("Message sent successfully. Our dark team will get back to you as soon as possible.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Error sending message. You need to scream louder. Please try again.");
        },
      );
  };
  return (
//Here we use name instead of id to target the inputs because emailjs uses the name attribute to collect the data from the form
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" name="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" name="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
