import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:tripathirudra934@gmail.com" data-cursor="disable">
                tripathirudra934@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917880325121" data-cursor="disable">
                +91 7880325121
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/tripathirudra"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ayush Tripathi</span>
            </h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
