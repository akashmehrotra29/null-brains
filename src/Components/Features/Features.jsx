import styles from "./Features.module.css";
import {
  FaCertificate,
  FaRegBell,
  FaCubes,
  FaDev,
  FaInbox,
  FaMoneyBill,
} from "react-icons/fa";

const features = [
  {
    logo: <FaCertificate size={40} color="#2563EB" />,
    featureName: "Certifications",
    featureDescription:
      "Each of our palan will provide you and your team with certifications.",
  },
  {
    logo: <FaRegBell size={40} color="#2563EB" />,
    featureName: "Notifications",
    featureDescription:
      "Send out notifications to all your customers to keep them engaged.",
  },
  {
    logo: <FaCubes size={40} color="#2563EB" />,
    featureName: "Bundles",
    featureDescription:
      "High-quality bundles of awesome tools to help you out.",
  },
  {
    logo: <FaDev size={40} color="#2563EB" />,
    featureName: "Developer Tools",
    featureDescription:
      "Devloper tools to help grow your application and keep it up-to date.",
  },
  {
    logo: <FaInbox size={40} color="#2563EB" />,
    featureName: "Building Blocks",
    featureDescription:
      "The right kind of building blocks to take your company to the next level.",
  },
  {
    logo: <FaMoneyBill size={40} color="#2563EB" />,
    featureName: "Coupons",
    featureDescription:
      "Coupon system to provide special offers and discounts for your app.",
  },
];

export const Features = () => {
  return (
    <>
      <div className={styles.container} id="features">
        <div className={styles.featuresHeading}>
          <h2>Our Features</h2>
          <div>Check out our list of awesome features below.</div>
        </div>
        <div className={styles.featuresGridContainer}>
          {features.map((feature) => {
            return (
              <>
                <div className={styles.featuresCardContainer}>
                  <div>{feature.logo}</div>
                  <div>{feature.featureName}</div>
                  <div>{feature.featureDescription}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
