import "./footer.css";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import {
  faHandHoldingDroplet,
  faLocationDot,
  faEnvelope,
  faPhoneFlip,
  faPrint,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

// BRAND ICONS
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <div className="search-socials">
            <div className="search">
              <form>
                <input
                  type="text"
                  placeholder="أدخل بريدك الإكتروني للإشتراك"
                />
                <Button isIcon={false} text="إشتراك" styleBtn="dark">
                  <input type="submit" />
                </Button>
              </form>
            </div>

            <div className="social">
              <div className="icon">
                <Button
                  isIcon={true}
                  text={faFacebookF}
                  width={"50px"}
                  height={"50px"}
                />
              </div>

              <div className="icon">
                <Button
                  isIcon={true}
                  text={faXTwitter}
                  width={"50px"}
                  height={"50px"}
                />
              </div>

              <div className="icon">
                <Button
                  isIcon={true}
                  text={faInstagram}
                  width={"50px"}
                  height={"50px"}
                />
              </div>

              <div className="icon">
                <Button
                  isIcon={true}
                  text={faLinkedinIn}
                  width={"50px"}
                  height={"50px"}
                />
              </div>
            </div>
          </div>

          <div className="footer-content">
            <div className="col1">
              <div className="logo">
                <FontAwesomeIcon
                  icon={faHandHoldingDroplet}
                  style={{ color: "#00d1f9", fontSize: "24px" }}
                />
                <h2>Acuas</h2>
              </div>

              <p>
                الماء سر الحياة، فلا حياة بدونه. يروي الأرض، وينعش الأجساد،
                ويدخل في كل تفاصيل حياتنا. فلنحافظ عليه، فهو نعمة لا تُقدر بثمن.
              </p>
            </div>

            <div className="col2">
              <h2 className="head-footer">من نحن</h2>

              <ul className="list-footer">
                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    لماذا تختارنا
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    عبوات مياه مجانًا
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    موزعين المياه
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    مبردات المياه المعبأة
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    تواصل معنا
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    الشروط والأحكام
                  </a>
                </li>
              </ul>
            </div>

            <div className="col3">
              <h2 className="head-footer">اوقات العمل</h2>

              <ul>
                <li>
                  <p>الإثنين - الجمعة:</p>
                  <p>09:00 صباح إلى 07:00 مساًء</p>
                </li>

                <li>
                  <p>السبت:</p>
                  <p>10:00 صباح إلى 05:00 مساًء</p>
                </li>

                <li>
                  <p>اوقات الإجازة:</p>
                  <p>يوم الاحد هو يوم إجازتنا</p>
                </li>
              </ul>
            </div>

            <div className="col4">
              <h2 className="head-footer">معلومات التواصل</h2>

              <ul className="list-footer">
                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>شارع 355 , نيويورك, الولايات المتحدة</p>
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>water@gmail.com</p>
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>water@gmail.com</p>
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <p dir="ltr">+012 345 6789</p>
                  </a>
                </li>

                <li className="list-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faPrint} />
                    <p dir="ltr">+012 345 6789</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>تم الإنشاء بواسطة محمد الحربي</h4>
      </div>
    </footer>
  );
};

export default Footer;
