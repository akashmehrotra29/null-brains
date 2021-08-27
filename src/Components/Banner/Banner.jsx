import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <h1 className={styles.headingPart1}>Start Crafting Your</h1>
        <h1 className={styles.headingPart2}>Next Great Idea</h1>
        <div className={styles.paraContainer}>
          <p className={styles.para}>
            Simplifying the creation of landing pages, blog pages,
          </p>
          <p className={styles.para}>application pages and so much more!</p>
        </div>
        <button className={styles.positinedButton}>only $15/mo</button>
        <button className={`btn-primary`}>Purchase Now</button>
        <div className={styles.learnMore}>Learn More</div>
      </div>
    </>
  );
};
