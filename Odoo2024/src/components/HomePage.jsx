import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../css/HomePage.css";
import SummeryApi from "../commen/SummeryAPi";

function HomePage() {
  const [newBooks, setNewBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SummeryApi.fetchBook.url, {
          method: SummeryApi.fetchBook.method,
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await response.json();
        console.log("data: " + data);
        setNewBooks(data);
        setTrendingBooks(data); // You may want to adjust this based on your API response structure
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderBookCard = (book) => {
    if (!book) {
      return null; // or return a default book card
    }

    return (
      <div className="card mb-3 d-flex" key={book._id}>
        <img
          src={book.url}
          className="card-img-left"
          alt={book.title}
          style={{ width: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {/* {book.authors.join(", ")} */}
          </h6>
          <p className="card-text">
            <strong>Publisher:</strong> {book.publisher}
            <br />
            <strong>Year:</strong> {book.publishedDate}
            <br />
            <strong>Genre:</strong> {book.genre}
            <br />
            <strong>Available:</strong> {book.available}/{book.quantity}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mt-3">
        <form className="d-flex w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>New Arrivals</h2>
            {newBooks.map(renderBookCard)}
          </div>
          <div className="col-md-6 mb-4">
            <h2>Trending</h2>
            {trendingBooks.map(renderBookCard)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
