import styles from "./USP.module.css";

export const USP = () => {
  return (
    <>
      <div className={styles.uspContainer}>
        <span className={styles.columnImg1Container}>
          <img src="assets/productivity.jpg" alt="productivity" />
        </span>
        <div className={styles.columnText1Container}>
          <h3>Boost Productivity</h3>
          <div>
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </div>
          <ul>
            <li>Maximize productivity and growth</li>
            <li>Speed ast your competition</li>
            <li>Learn the top techniques</li>
          </ul>
        </div>
        <div className={styles.containerAlign2}>
          <div className={styles.columnText2Container}>
            <h3>Automated Tasks</h3>
            <div>
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </div>
            <ul>
              <li>Automated task management workflow</li>
              <li>Detailed analytics for your data</li>
              <li>Some awesome integrations</li>
            </ul>
          </div>
        </div>
        <span className={styles.columnImg2Container}>
          <img src="assets/automation.jpeg" alt="automation" />
        </span>
      </div>
    </>
  );
};
