import { useState } from "react";
import "./contact.css";
import Button from "../Button";

// Import the FontAwesomeIcon component to use icons in a React application
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  ICONS
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [inputFocusState, setInputFocusState] = useState(false);

  return (
    <>
      <section className="section contact">
        <div className="container">
          <div className="form-content">
            <h4>تواصل معنا</h4>
            <h1>ارسل رسالتك</h1>
            <form>
              <div className={`input-content`}>
                <input type="text" placeholder="الاسم" />
                <input type="email" placeholder="البريد الإكتروني" />
                <input type="text" placeholder="رقم الهاتف" />
                <input type="text" placeholder="الموضوع" />
              </div>
              <textarea placeholder="رسالة"></textarea>
              <Button text={"إرسال"} isIcon={false} />
            </form>
          </div>
          <div className="info-content">
            <div className="contact-content">
              <div className="box-info">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h2>العنوان</h2>
                  <p>١٢٣ برج الشمال، نيويورك، الولايات المتحدة الأمريكية</p>
                </div>
              </div>

              <div className="children-wrapper">
                <div className="box-info">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h2>راسلنا</h2>
                    <p>info@example.com</p>
                  </div>
                </div>
                <div className="box-info">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h2>الهاتف</h2>
                    <p dir="ltr">(+012) 3456 7890 123</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774386.70973749!2d-73.979506!3d40.69714100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1749821776639!5m2!1sen!2sbd"
                }
                width={"600"}
                height={"450"}
                style={{ border: "0" }}
                loading={"lazy"}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
