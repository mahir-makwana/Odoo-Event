import React from "react";
import Header from "./Header";

function UserHomePage() {
  // Sample data for user's books
  const userBooks = [
    {
      isbn: "1234567890",
      title: "Book Title 1",
      author: "Author 1",
      publisher: "Publisher A",
      year: 2021,
      genre: "Fiction",
      quantity: 5,
      available: 3,
      image: "/images/book1.jpg", // Example image path
      remainingDays: 10,
    },
    {
      isbn: "0987654321",
      title: "Book Title 2",
      author: "Author 2",
      publisher: "Publisher B",
      year: 2022,
      genre: "Non-Fiction",
      quantity: 8,
      available: 2,
      image: "/images/book2.jpg", // Example image path
      remainingDays: 15,
    },
    // Add more books as needed
  ];

  const renderBookCard = (book) => {
    return (
      <div className="card mb-3 d-flex flex-row">
        <img
          src={book.image}
          className="card-img-left"
          alt={book.title}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
          <p className="card-text">
            <strong>Publisher:</strong> {book.publisher}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              facilis. Ratione rerum consectetur tempore, minus quam iusto esse
              excepturi error nam natus tempora illo inventore reprehenderit ut
              corrupti placeat voluptatem?
            </p>
          </p>
          <button className="btn btn-outline-primary">
            {book.remainingDays} days left
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search books..."
              aria-label="Search books"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <h2 className="h4">My Books</h2>
          <div
            className="card-scroll" // Custom class for scrollable section
            style={{
              maxHeight: "60vh",
              overflowY: "auto",
              // Add padding to ensure scrollbar visibility
              paddingRight: "15px",
              marginRight: "-15px", // Offset negative margin from the row
            }}
          >
            <div className="row">
              {userBooks.map((book, index) => (
                <div key={index} className="col-md-12 mb-4">
                  {renderBookCard(book)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="h4">User Profile</h2>
          <div className="card">
            <img
              src="/images/user_profile.jpg" // Example profile picture path
              className="card-img-top rounded-circle"
              alt="User Profile"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">User Name</h5>
              <p className="card-text">
                <strong>Company:</strong> User Company
                <br />
                <strong>Address:</strong> User Address
                <br />
                <strong>Phone:</strong> (987) 654-3210
                <br />
                <strong>Email:</strong> user@example.com
              </p>
              <button className="btn btn-outline-primary">
                Edit Information
              </button>
              <div>
                <p>
                  <strong>Admin:</strong> Admin Name <br />
                  <strong>Email:</strong> admin@example.com <br />
                  <strong>Phone:</strong> (123) 456-7890 <br />
                  <strong>Address:</strong> 123 Admin St, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHomePage;
