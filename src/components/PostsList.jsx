import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"; // ✅ Correct

const PostsList = () => {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [filter, setFilter] = useState("");

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header-section">
        <h1>Publications</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Filtrer les posts..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-input"
          />
          <button onClick={refetch} className="reload-button">
            Recharger
          </button>
        </div>
      </div>

      {loading && <p>Chargement...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="posts-grid">
        {!loading &&
          !error &&
          filteredPosts?.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="card-footer">
                <Link to={`/posts/${post.id}`} className="view-more-btn">
                  Voir plus
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
