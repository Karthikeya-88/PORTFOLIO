import React, { Component } from "react";
import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import "./index.css";
class HireMeSection extends Component {
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
      <section id="hireMe">
        <div className="hire-me-container">
          <div className="contact-info-side">
            <p
              className="section-description text-white"
              style={{ fontSize: "18px" }}
            >
              I'm open for full-time / part-time / contract / freelancing! 🚀
              Need a{" "}
              <span
                style={{
                  color: "cyan",
                  fontWeight: "bold",
                  textShadow: "-2px 1px #000",
                }}
              >
                full-stack app
              </span>{" "}
              built from the ground up with{" "}
              <span
                style={{
                  color: "#ffaa00",
                  fontWeight: "1000",
                  textShadow: "2px 2px #2d2d2d",
                }}
              >
                Node.js - React.js/Next - MongoDB/SQL?
              </span>{" "}
              Let me turn your vision into a scalable, high-performance reality
              — tailored just for you! Let's build something amazing together.
              💡✨
            </p>

            <div className="social-icons-container">
              <a href="mailto:dkarthikeya888@gmail.com" className="social-icon">
                <MdEmail />
              </a>
              <a
                href="http://www.linkedin.com/in/karthikeya-doosa-210a42244"
                className="social-icon"
              >
                <BiLogoLinkedinSquare />
              </a>
              <a
                href="https://github.com/Karthikeya-88"
                className="social-icon"
              >
                <VscGithub />
              </a>
            </div>
          </div>

          <div className="contact-form-side">
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
                  placeholder="Your Email"
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
          </div>
        </div>
      </section>
    );
  }
}

export default HireMeSection;
