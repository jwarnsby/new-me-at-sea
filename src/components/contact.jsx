import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
  referredBy: "", // Add initial state for referredBy
};

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [notification, setNotification] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_ytstfwt", 
        "template_xjstvs8", 
        formRef.current, 
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          clearForm();
          setNotification("Your message has been sent successfully.");
          setTimeout(() => {
            setNotification(null);
          }, 2000); // Clear notification after 2 seconds
        },
        (error) => {
          console.log(error.text);
          setNotification("Error sending message. Please try again.");
          setTimeout(() => {
            setNotification(null);
          }, 2000); // Clear notification after 2 seconds
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Register Today!</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible. Or give us a call at (949) 273-5444. Limited space available!
                </p>
              </div>
              <form ref={formRef} name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={formData.name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Number of travelers, any comments or questions"
                    required
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <p>Referred By:</p>
                  <select
                    name="referredBy"
                    id="referredBy"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.referredBy}
                    required
                  >
                    <option value="" disabled>Select...</option>
                    <option value="Jane">Jane</option>
                    <option value="Sabine">Sabine</option>
                    <option value="Jana">Jana</option>
                    <option value="Andrea">Andrea</option>
                  </select>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
              {notification && (
                <div className="alert alert-success mt-3" role="alert">
                  {notification}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
