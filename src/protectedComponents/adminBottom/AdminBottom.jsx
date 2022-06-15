import React, { useEffect, useState } from "react";
import "./styles.css";
const AdminBottom = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://api.quotable.io/random?tags=famous-quotes", options)
      .then((response) => response.json())
      .then((response) => setQuote(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="admin-bottom-container">
      <div className="container">
        <div className="quote-container">
          <div className="quote">
            {quote ? quote.content : null}
            <br />
            <span className="author">{quote ? quote.author : null}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBottom;
