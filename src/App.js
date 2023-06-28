import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Signin from "./pages/forms/Signin";
import Signup from "./pages/forms/Signup";
import PostsPage from "./pages/posts-page/PostsPage";
import CreatePost from "./pages/create-post/CreatePost";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostDetails from "./pages/post-details/PostDetials";
import Category from "./pages/category/Category";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile/:id" element={<Profile />} />

        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="post-details/:id" element={<PostDetails />} />
          <Route path="categories/:category" element={<Category />} />
        </Route>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
