import { useParams } from "react-router-dom";
import PostCard from "../../Components/PostCard/PostCard";
import { usePostData } from "../../Context/PostContex";
import LeftSiderbar from "../../Components/LeftSiderbar/LeftSiderbar";
import styles from "./Comment.module.css";

const Comment = () => {
  const { postData } = usePostData();
  const { id } = useParams();
  console.log("🚀 ~ file: Comment.jsx:8 ~ Comment ~ id:", id);

  const post = postData?.posts?.posts.find(
    (eachPost) => eachPost.postId === id
  );
  console.log("🚀 ~ file: Comment.jsx:12 ~ Comment ~ post:", post);

  return (
    <section>
      <div className={styles.landing__container}>
        <LeftSiderbar />
        <PostCard post={post} showComment="showComment" />
      </div>
    </section>
  );
};

export default Comment;
