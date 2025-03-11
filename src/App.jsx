import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import BlogPostList from "./components/PostsList";
import BlogPostDetail from "./components/PostDetail";
import "./App.css";

function MainApp() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/posts/:id" element={<BlogPostDetail />} />
      </Routes>
    </RouterProvider>
  );
}

export default MainApp;
