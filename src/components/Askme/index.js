import React, { Component } from "react";
import "./index.css";

class AskMeSection extends Component {
  state = {
    name: "",
    message: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, message } = this.state;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:dkarthikeya888@gmail.com?subject=${subject}&body=${body}`;
  };

  render() {
    const { name, message } = this.state;
    return (
      <section id="ask-me">
        <h3>
          <b>Let's Connect</b>
        </h3>
        <p style={{ font: "italic 20px Lora" }}>
          I'm open for freelancing! 🚀 Need a{" "}
          <b style={{ font: "bold italic 22px Lora" }}>full-stack app</b> built
          from the ground up with{" "}
          <b style={{ font: "bold italic 22px Constantia" }}>
            {" "}
            React, Node & Mongo or SQL?
          </b>{" "}
          Let me turn your vision into a scalable, high-performance reality —
          tailored just for you! Let's build something amazing together. 💡✨
        </p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            cols="10"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <div>
            <label htmlFor="summary">Message:</label>
            <br />
            <textarea
              id="summary"
              name="message"
              rows="6"
              cols="58"
              value={message}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Send Mail</button>
        </form>
      </section>
    );
  }
}

export default AskMeSection;
