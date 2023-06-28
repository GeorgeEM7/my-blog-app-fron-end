import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { posts, categories } from "../../dummyData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-title">
        <h2>Welcome to G Log</h2>
      </div>
      <div className="home-latest-post">Latest post</div>
      <div className="home-container">
        <PostList posts={posts.slice(0, 3)} />

        <Sidebar categories={categories} />
      </div>
      <div className="home-see-all-posts-link">
        <Link className="see-all-posts-link" to="/posts">
          See all posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
