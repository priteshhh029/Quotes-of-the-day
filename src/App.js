import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    const randomQuote = await axios.get("https://api.quotable.io/random");
    setQuote(randomQuote.data);
  };

  return (
    <div className="App">
      <div className="quote">
      <h1>Quote for the Day</h1>
        {quote.content && <p>"{quote.content}"</p>}
        <div className="line"></div>
        {quote.author && <h4> - {quote.author.split(',')[0]}</h4>}
      </div>
      <br></br>
      <button  className="Authors" onClick={getRandomQuote}>
        Quotes
        </button>
      <Link  className="Authors" to={"/authors"}>
        Search Authors
        </Link>
    </div>
  );
}

export default App;
