import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"; // ✅ Correct

const BlogPostDetail = () => {
  const { id } = useParams();
  const {
    data: blogPost,
    loading: isPostLoading,
    error: fetchError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const { data: commentList, loading: isCommentsLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return (
    <div className="container">
      <h1>Détails : </h1>
      <button
        onClick={() => (window.location.href = "/")}
        className="back-button"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "5%",
        }}
      >
        Retour à l'accueil
      </button>

      {isPostLoading && <p>Loading...</p>}
      {fetchError && <p className="error-message">{fetchError}</p>}

      <div className="post-detail">
        {blogPost && (
          <div className="post-card">
            <h2 style={{ color: "#000" }}>{blogPost.title}</h2>
            <p style={{ color: "#000" }}>{blogPost.body}</p>
          </div>
        )}
      </div>

      <h3>Comments</h3>
      {isCommentsLoading && <p>Loading...</p>}
      {commentList && (
        <div className="comments-grid">
          {commentList.map((commentItem) => (
            <div key={commentItem.id} className="comment-card">
              <b>{commentItem.email}</b>
              <p>{commentItem.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostDetail;
