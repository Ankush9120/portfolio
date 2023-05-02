import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <header className="pt-4">
        Contact <span>Me!</span>
      </header>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
