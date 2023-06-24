import { AiTwotoneHome } from "react-icons/ai";
import { BsRocket } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ImUser } from "react-icons/im";

import styles from "./LeftSidebar.module.css";
import { usePostData } from "../../Context/PostContex";
import { NavLink } from "react-router-dom";

const LeftSiderbar = () => {
  const { postData } = usePostData();
  return (
    <div className="container">
      <div className={styles.leftSidebar__container}>
        <div className={styles.leftSidebar__option__container}>
          <NavLink to="/" activeClassName={styles.active}>
            <div className={styles.home}>
              <AiTwotoneHome className={styles.icon} />
              <h2>Home</h2>
            </div>
          </NavLink>
          <div className={styles.explore}>
            <BsRocket className={styles.icon} />
            <h2>Explore</h2>
          </div>
          <div className={styles.bookmark}>
            <BsFillBookmarkFill className={styles.icon} />
            <h2>Bookmark</h2>
          </div>
          <div className={styles.profile}>
            <ImUser className={styles.icon} />
            <h2>Profile</h2>
          </div>
        </div>
        <div className={styles.leftSidebar__Profile}>
          <div className={styles.profile__image}>
            <img src={postData?.posts?.picUrl} alt="" />
          </div>
          <div className={styles.person__details}>
            <h2>{postData?.posts?.name}</h2>
            <h5>@{postData?.posts?.username}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSiderbar;
