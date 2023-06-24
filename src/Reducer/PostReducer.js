import forumData from "../Data/postData";

const INITIAL_STATE = {
  posts: forumData,
};

const postReducer = (state, { type, payload }) => {
  console.log("🚀 ~ file: PostReducer.js:8 ~ postReducer ~ payload:", payload);
  switch (type) {
    case "UPVOTE": {
      const updatePost = [...state.posts.posts].map((eachPost) =>
        eachPost.postId === payload.postId
          ? {
              ...eachPost,
              upvotes: eachPost.upvotes + 1,
              isActiveUpvote: true,
              isActiveDownvote: false,
            }
          : eachPost
      );
      return {
        ...state,
        posts: { ...state.posts, posts: updatePost },
      };
    }

    case "DOWNVOTE": {
      const updatePost = [...state.posts.posts].map((eachPost) =>
        eachPost.postId === payload.postId
          ? {
              ...eachPost,
              upvotes: eachPost.upvotes - 1,
              downvotes: eachPost.downvotes + 1,
              isActiveUpvote: false,
              isActiveDownvote: true,
            }
          : eachPost
      );
      return {
        ...state,
        posts: { ...state.posts, posts: updatePost },
      };
    }

    case "BOOKMARK": {
      const updatePost = [...state.posts.posts].map((eachPost) =>
        eachPost.postId === payload.postId
          ? { ...eachPost, isBookmarked: !eachPost.isBookmarked }
          : eachPost
      );
      return {
        ...state,
        posts: { ...state.posts, posts: updatePost },
      };
    }

    case "SORT__BY__Latest": {
      const updatePost = [...state.posts.posts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return {
        ...state,
        posts: { ...state.posts, posts: updatePost },
      };
    }

    case "SORT__BY__Top__Votes": {
      const updatePost = [...state.posts.posts].sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
      return {
        ...state,
        posts: { ...state.posts, posts: updatePost },
      };
    }

    default:
      return state;
  }
};

export { postReducer, INITIAL_STATE };
