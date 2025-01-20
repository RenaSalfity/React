import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainPage.css";
import "../assets/styles/Articles.css";
import manicureImage from "../assets/img/manicure.jpg";
import haircutImage from "../assets/img/haircutChair.jpg";
import hairRemovalImage from "../assets/img/hair_removal.jpg";
function MainPage() {
  const articles = [
    {
      id: 1,
      title: "פדיקור מניקור",
      image: manicureImage,
      content: "Life isn't perfect, but your nails can be.",
    },
    {
      id: 2,
      title: "תספורת",
      image: haircutImage,
      content:
        "A good haircut isn't just a style; it's a statement of confidence.",
    },
    {
      id: 3,
      title: "הסרת שיער",
      image: hairRemovalImage,
      content: "life is better without hair on all of your body",
    },
  ];

  return (
    <div className="main">
      <section className="articles">
        <div className="container">
          <h1 className="main-page-title">שירותים</h1>
          {/* <div className='d-flex'>
                <Link to="/newpost" className="btn">new Post</Link>
            </div> */}
          <div className="articles-container">
            {/* {articles&&articles.map((article) => (
                <div key={article.id} className="article-card">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <h2 className="article-title">{article.title}</h2>
                    <button className="view-button">View</button>
                </div>
                ))} */}

            {articles &&
              articles.map((article) => (
                <div key={article.id} className="article-card">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                  />
                  <h2 className="article-title">{article.title}</h2>
                  <Link
                    to={`/post/${article.id}`}
                    state={{ post: article }}
                    className="view-button"
                  >
                    לזימון תור
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
