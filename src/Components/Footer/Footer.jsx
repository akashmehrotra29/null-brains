import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer} id="contact">
        <div className={styles.navigation}>
          <div>About</div>
          <div>
            <HashLink smooth to={"/#blogs"} className={styles.hashLink}>
              Blog
            </HashLink>
          </div>
          <div>Team</div>
          <div>Pricing</div>
          <div>
            <HashLink smooth to={"/#contact"} className={styles.hashLink}>
              Contact
            </HashLink>
          </div>
          <div>Terms</div>
        </div>
        <div className={`${styles.navigation} ${styles.paddingTop2}`}>
          <div>
            <FaFacebook color="#9ca3af" />
          </div>
          <div>
            <FaInstagram color="#9ca3af" />
          </div>
          <div>
            <FaTwitter color="#9ca3af" />
          </div>
          <div>
            <FaGithub color="#9ca3af" />
          </div>
          <div>
            <FaLinkedin color="#9ca3af" />
          </div>
        </div>
        <div className={`${styles.navigation} ${styles.paddingTop1}`}>
          <div>&#169; 2021 SomeCompany Inc. All rights reserved.</div>
        </div>
      </div>
    </>
  );
};
