import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Comment from "./Pages/Comment/Comment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment/:id" element={<Comment />} />
      </Routes>
    </>
  );
}

export default App;
