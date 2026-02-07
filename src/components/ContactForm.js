import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

export default function ContactForm() {
  const form = useRef();

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
        },
        (error) => {
          console.log("FAILED...", error.text);
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
    </form>
  );
}
