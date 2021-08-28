import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.navigation}>
          <div>About</div>
          <div>Blog</div>
          <div>Team</div>
          <div>Pricing</div>
          <div>Contact</div>
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
