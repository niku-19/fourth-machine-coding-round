import LeftSidebar from "../LeftSiderbar/LeftSiderbar";
import PostListing from "../PostListing/PostListing";
import RightSidebar from "../RightSidebar/RightSidebar";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section>
      <div className={styles.landing__container}>
        <LeftSidebar />
        <PostListing />
        <RightSidebar />
      </div>
    </section>
  );
};

export default Landing;
