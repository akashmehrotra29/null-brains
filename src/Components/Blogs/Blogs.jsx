import styles from "./Blogs.module.css";

export const Blogs = () => {
  return (
    <>
      <div className={styles.blogContainer}>
        <h2 className={styles.blogHeading}>The Project Blog</h2>
        <div className={styles.blogSubheading}>
          Designs and layouts to help you with your app.
        </div>
        <div className={styles.blogGridContainer}>
          <div className={styles.blogColumnHalfRounded}>
            <div className={styles.purpleBackground}>
              <img src="assets/Refreshing-Designs.png" alt="" />
              <button className={`${styles.tag} ${styles.purpleTag}`}>
                RESOURCES
              </button>
              <div className={styles.title}>Refreshing Designs</div>
              <div className={styles.description}>
                Quench satisfying designs to help you stir up emotion and tell a
                story.
              </div>
            </div>
          </div>

          <div className={styles.blogColumnHalfRounded}>
            <div className={styles.blueBackground}>
              <img src="assets/Healthier-Lifestyle.png" alt="" />
              <button className={`${styles.tag} ${styles.blueTag}`}>
                LIFESTYLE
              </button>
              <div className={styles.title}>Healthier Lifestyle</div>
              <div className={styles.description}>
                Living a helthier lifestyle will help with your productivity and
                your mind-set.
              </div>
            </div>
          </div>

          <div className={styles.blogColumnHalfRounded}>
            <div className={styles.yellowBackground}>
              <img src="assets/Gaming-Evolution.png" alt="" />
              <button className={`${styles.tag} ${styles.yellowTag}`}>
                GAMING
              </button>
              <div className={styles.title}>Gaming Evolution</div>
              <div className={styles.description}>
                Learn about the evolution of gaming and how it started a
                revolution.
              </div>
            </div>
          </div>

          <div className={styles.blogColumnfullRounded}>
            <div>
              <img src="assets/Workstations.png" alt="" />
              <button className={`${styles.tag} ${styles.purpleTagSamall}`}>
                INSPIRATION
              </button>
              <div className={styles.titleSmallCard}>
                Best Workstations of the Year
              </div>
              <div className={styles.descriptionSmallCard}>
                Check out these inspiring workstations and get ideas on how to
                level up your workstation.
              </div>
            </div>
          </div>

          <div className={styles.blogColumnfullRounded}>
            <div>
              <img src="assets/Productivity.png" alt="" />
              <button className={`${styles.tag} ${styles.blueTagSamall}`}>
                FOOD
              </button>
              <div className={styles.titleSmallCard}>
                Eating for Productivity
              </div>
              <div className={styles.descriptionSmallCard}>
                Learn how to be more disciplined in your diet and how you can
                eat to maximize productivity.
              </div>
            </div>
          </div>

          <div className={styles.blogColumnfullRounded}>
            <div>
              <img src="assets/Design.png" alt="" />
              <button className={`${styles.tag} ${styles.yellowTagSamall}`}>
                RESOURCES
              </button>
              <div className={styles.titleSmallCard}>A Design Mind-set</div>
              <div className={styles.descriptionSmallCard}>
                What does it mean to have a design mind-set? Learn how to
                improve your eye for design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
