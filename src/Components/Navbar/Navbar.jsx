import styles from "./Navbar.module.css";
import { BsSearch, BsJustify, BsLock } from "react-icons/bs";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div>
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
          <div className={styles.navLink}>Home</div>
          <div className={styles.navLink}>Features</div>
          <div className={styles.navLink}>Blog</div>
          <div className={styles.navLink}>Contact</div>
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
