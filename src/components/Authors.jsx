import React, { useEffect, useState } from "react";
import "./authors.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://zenquotes.io/api/authors")
      .then((data) => {
        setAuthors(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://api.quotable.io/search/authors?query=${search}`)
        .then((data) => {
          setAuthors(data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("https://api.quotable.io/authors")
        .then((data) => {
          setAuthors(data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [search]);

  return (
    <div className="authorsPage">
      <h2>Find Authors</h2>
      <input className="search" placeholder="Type to search" onChange={(e) => setSearch(e.target.value)}/>
      <div className="authorsList">
        {authors.length > 0 ? (
          authors.map((item, index) => {
            return (
              <Link to={`/author/${item.slug}`} key={index} className="authorCard">
                <img src="/image.jpg" alt="author" />
                <h3>{item.name}</h3>
                <h5>{item.description}</h5>
              </Link>
            );
          })
        ) : (
          <div className="message">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Authors;
