import styles from "./Navbar.module.css";
import { BsSearch, BsJustify } from "react-icons/bs";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.positionNav}>
      <div className={styles.navbarContainer}>
        <div className={styles.menuLogoContainer}>
          <div
            className={styles.menu}
            onClick={() => {
              setMenuOpen((currState) => !currState);
            }}
          >
            <BsJustify />
          </div>
          <div>nullBrains</div>
        </div>
        <div className={styles.navigationOptions}>
          <NavHashLink smooth to={"/#home"} v className={styles.navLink}>
            Home
          </NavHashLink>
          <NavHashLink smooth to={"/#features"} className={styles.navLink}>
            Features
          </NavHashLink>
          <NavHashLink smooth to={"/#blogs"} className={styles.navLink}>
            Blog
          </NavHashLink>
          <NavHashLink smooth to={"/#contact"} className={styles.navLink}>
            Contact
          </NavHashLink>
          <div className={`${styles.navLink} ${styles.navLinkSearch}`}>
            <BsSearch />
          </div>
        </div>
        <div>
          <button className={styles.signIn}>Sign In</button>
          <button className={`btn-primary`}>Sign Up</button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div
        style={
          !menuOpen
            ? { display: "none" }
            : { display: "block", alignItems: "center" }
        }
      >
        <ul
          className={`${styles.unorderedList} ${styles.listContainer} ${styles.menuDisplay}`}
        >
          <li>Home</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <BsSearch />
          </li>
        </ul>
      </div>
    </div>
  );
};
