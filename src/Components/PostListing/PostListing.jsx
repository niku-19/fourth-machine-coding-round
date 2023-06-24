import { usePostData } from "../../Context/PostContex";
import PostCard from "../PostCard/PostCard";

import styles from "./PostListing.module.css";
const PostListing = () => {
  const { postData } = usePostData();
  return (
    <div className={styles.post__container}>
      {postData?.posts?.posts.map((eachPost) => {
        return <PostCard key={eachPost.postId} post={eachPost} />;
      })}
    </div>
  );
};

export default PostListing;
