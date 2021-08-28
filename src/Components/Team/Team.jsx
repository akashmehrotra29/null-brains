import styles from "./Team.module.css";
import { FaTwitter, FaGithub } from "react-icons/fa";

const team = [
  {
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    name: "Freddy Smith",
    designation: "CEO and Founder",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    name: "Carl Jones",
    designation: "CTO and Co-Founder",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Susan Peterson",
    designation: "Marketing Director",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80",
    name: "Tommy Barnes",
    designation: "Designer",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Ron Jenson",
    designation: "Senior Developer",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Pete Tompkins",
    designation: "Web Developer",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Kelly Richards",
    designation: "Sales Manager",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
  {
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    name: "Alexis Jardan",
    designation: "Affiliate Manager",
    logos: [<FaTwitter color="#D1D5DB" />, <FaGithub color="#D1D5DB" />],
  },
];

export const Team = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingSmall}>OUR TEAM</div>
        <div className={styles.headingLarge}>An increadible team of </div>
        <div className={styles.headingLarge}>amazing individuals</div>
        <div className={styles.teamCardGridContainer}>
          {team.map((member) => {
            return (
              <>
                <div className={styles.teamCardContainer}>
                  <div className={styles.imageWrap}>
                    <img src={member.image} alt="member" />
                  </div>
                  <div className={styles.memberName}>{member.name}</div>
                  <div className={styles.memberDesignation}>
                    {member.designation}
                  </div>
                  <div className={styles.socialHandles}>
                    <span>{member.logos[0]}</span>
                    <span>{member.logos[1]}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
