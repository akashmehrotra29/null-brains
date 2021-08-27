import styles from "./Companies.module.css";

export const Companies = () => {
  return (
    <>
      <div>
        <div className={`${styles.companiesContainer} ${styles.heading}`}>
          TRUSTED BY TOP-LEADING COMPANIES
        </div>
        <div className={`${styles.companiesContainer} ${styles.logoContainer}`}>
          <img src="assets/google.png" alt="Google" />
          <img src="assets/hubspot.png" alt="Hubspot" />
          <img src="assets/youtube.png" alt="Youtube" />
          <img src="assets/slack.png" alt="Slack" />
          <img src="assets/shopify.png" alt="Shopify" />
        </div>
      </div>
    </>
  );
};
