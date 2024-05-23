import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
function Contact() {
  const inputsRef = useRef([]);

  useEffect(() => {
    const inputs = inputsRef.current.filter(input => input); // Ensure we have only valid elements

    const focusFunc = (event) => {
      let parent = event.target.parentNode;
      parent.classList.add('focus');
    };

    const blurFunc = (event) => {
      let parent = event.target.parentNode;
      if (event.target.value === '') {
        parent.classList.remove('focus');
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        if (input) {
          input.removeEventListener('focus', focusFunc);
          input.removeEventListener('blur', blurFunc);
        }
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <div className="cont">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit} autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" ref={(el) => (inputsRef.current[0] = el)} />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" ref={(el) => (inputsRef.current[1] = el)} />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" ref={(el) => (inputsRef.current[2] = el)} />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" ref={(el) => (inputsRef.current[3] = el)}></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
