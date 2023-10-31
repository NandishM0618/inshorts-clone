import "../styles/styles.css";
import { Link } from "react-router-dom";
export default function Article({ article }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img">
          <img src={article.url} alt="news-img" />
        </div>
        <div className="card-content">
          <h2>{article.title}</h2>
          <h3>
            short by {article.aurthor} /{" "}
            {new Date(article.timestamp).toDateString()}{" "}
          </h3>
          <p>{article.description}</p>
          <p>
            read more at{" "}
            <a
              href={article.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {article.publisher}
            </a>
          </p>
        </div>{" "}
        *
      </div>
    </div>
  );
}
