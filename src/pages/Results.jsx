import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./result.css";

const Results = () => {
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    // Your fetch logic here or example static data:
    setResults([
      {
        id: 1,
        title: "Example Book 1",
        author: "Author 1",
        // img: require("../assets/book1.jpg"),
      },
      {
        id: 2,
        title: "Example Book 2",
        author: "Author 2",
        // img: require("../assets/book2.jpg"),
      },
    ]);
  };

  const addToProfile = (book, status) => {
    alert(`Added "${book.title}" as ${status}`);
  };

  return (
    <>
      <Navbar />
      <section className="results-section">
        <button onClick={fetchResults}>Fetch Results</button>
        <div id="results">
          {results.map((book) => (
            <div className="result-item" key={book.id}>
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <div className="book-controls">
                <button
                  className="to-be-read"
                  onClick={() => addToProfile(book, "To Be Read")}
                >
                  To Be Read
                </button>
                <button
                  className="currently-reading"
                  onClick={() => addToProfile(book, "Currently Reading")}
                >
                  Currently Reading
                </button>
                <button
                  className="already-read"
                  onClick={() => addToProfile(book, "Already Read")}
                >
                  Already Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Results;
