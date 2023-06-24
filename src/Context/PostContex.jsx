/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, postReducer } from "../Reducer/PostReducer";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [postData, dispatch] = useReducer(postReducer, INITIAL_STATE);

  return (
    <PostContext.Provider value={{ postData, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostData = () => useContext(PostContext);

export default PostProvider;
