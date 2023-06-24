/* eslint-disable react/prop-types */
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiSolidShareAlt } from "react-icons/bi";
import { BiSolidBookmark } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

import styles from "./PostCard.module.css";
import { usePostData } from "../../Context/PostContex";
import { NavLink } from "react-router-dom";

const PostCard = ({ post, showComment }) => {
  const { dispatch } = usePostData();
  const handleUpVote = () => {
    dispatch({ type: "UPVOTE", payload: post });
  };

  const handleDownVote = () => {
    dispatch({ type: "DOWNVOTE", payload: post });
  };

  const handleBookMark = () => {
    dispatch({ type: "BOOKMARK", payload: post });
  };

  return (
    <div className="container">
      <div className={styles.post__card}>
        <div className={styles.card__header__container}>
          <div className={styles.icons__container}>
            <BiSolidUpArrow
              className={styles.icon}
              style={{ fill: post.isActiveUpvote ? "blueviolet" : "#ccc" }}
              onClick={handleUpVote}
            />
            {post?.upvotes > post?.downvotes && <span>{post?.upvotes}</span>}
            {post?.upvotes <= post?.downvotes && (
              <span>{post?.downvotes - post?.upvotes}</span>
            )}

            <BiSolidDownArrow
              className={styles.icon}
              style={{ fill: post.isActiveDownvote ? "blueviolet" : "#ccc" }}
              onClick={handleDownVote}
            />
          </div>
          <div className={styles.details__container}>
            <div className={styles.details__header}>
              <div className={styles.details__avatar}>
                <img src={post?.picUrl} alt="" />
              </div>
              <div className={styles.details__username}>
                <p>
                  Posted by <span>{post.username}</span>{" "}
                </p>
              </div>
              <div>.</div>
              <div className={styles.post__time}>5m</div>
            </div>
            <div className={styles.details__title}>
              <p>{post.post}</p>
            </div>
            <div className={styles.details__tag}>
              {post?.tags?.map((eachtag) => {
                return <p key={eachtag}>{eachtag}</p>;
              })}
            </div>
            <div className={styles.details}>{post?.postDescription}</div>
          </div>
        </div>
        <div className={styles.horizontal__line}></div>
        <div className={styles.buttons__container}>
          <NavLink
            to={`/comment/${post.postId}`}
            className={styles.share__icons}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <BiComment className={styles.share__icons} />
              <span>{post?.comments?.length}</span>
            </div>
          </NavLink>
          <BiSolidShareAlt className={styles.share__icons} />
          <BiSolidBookmark
            style={{ fill: post?.isBookmarked ? "#000" : "#ccc" }}
            className={styles.share__icons}
            onClick={handleBookMark}
          />
        </div>
        <div className={styles.horizontal__line}></div>
        {showComment &&
          post?.comments?.map((eachComment) => {
            return (
              <>
                <div className={styles.comment__container}>
                  <div className={styles.commnet__avatar}>
                    <img src={eachComment?.picUrl} alt="" />
                  </div>
                  <div className={styles.commnet__details}>
                    <div className={styles.name}>
                      <p>{eachComment.name}</p>
                      <p>{eachComment.username}</p>
                      <p>.</p>
                      <p>5m</p>
                    </div>
                    <div className={styles.replying}>
                      <p>
                        Replying to <span>{post.username}</span>
                      </p>
                    </div>
                    <div className={styles.commnet}>
                      <p>{eachComment?.comment}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.buttons__container}>
                  <FcLike className={styles.share__icons} />
                  <NavLink
                    to={`/comment/${post.postId}`}
                    className={styles.share__icons}
                  >
                    <BiComment className={styles.share__icons} />
                  </NavLink>
                  <BiSolidShareAlt className={styles.share__icons} />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default PostCard;
