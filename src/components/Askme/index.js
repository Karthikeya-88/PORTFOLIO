import React, { Component } from "react";
import "./index.css";

class AskMeSection extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    isSubmitting: false,
    isSuccess: false,
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true, error: null });

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/dkarthikeya888@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        this.setState({
          isSuccess: true,
          isSubmitting: false,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isSubmitting: false,
      });
    }
  };

  render() {
    const { name, email, subject, message, isSubmitting, isSuccess, error } =
      this.state;

    return (
      <section id="ask-me" className="ask-me-section">
        <div className="text-center mb-4 position-relative">
          <h2 className="text-center text-info">Let's Connect</h2>
          <div
            className="signature-underline"
            style={{ backgroundColor: "#1795b8" }}
          ></div>
        </div>
        <p className="section-description">
          I'm open for freelancing! 🚀 Need a{" "}
          <span className="highlight">full-stack app</span> built from the
          ground up with{" "}
          <span className="tech-stack">
            Node.js - React.js/Next - MongoDB/SQL?
          </span>{" "}
          Let me turn your vision into a scalable, high-performance reality —
          tailored just for you! Let's build something amazing together. 💡✨
        </p>

        {isSuccess && (
          <div className="success-message">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {error && (
          <div className="error-message">
            Error: {error}. Please try again or email directly at
            dkarthikeya888@gmail.com
          </div>
        )}

        <form onSubmit={this.handleSubmit} className="contact-form">
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New contact form submission"
          />

          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              required
              placeholder="Your Name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
              placeholder="Your Gmail"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={this.handleInputChange}
              required
              placeholder="Subject"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={message}
              onChange={this.handleInputChange}
              required
              placeholder="Your Message"
              className="form-textarea"
            />
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AskMeSection;
