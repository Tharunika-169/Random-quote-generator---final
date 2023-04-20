/*import React from 'react'
import { useState, useEffect } from "react";
  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
function Home() {
    const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }
  return (
    <div>
        <h1 style={{color:'#4d1922',fontSize:'50px'}}><i>Random Quote Generator</i></h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </div>
  )
}

export default Home;*/
import React from 'react';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [copy ,setCopy] =useState("copy quote")
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
        setCopy("copy copied")
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
    setCopy("copy quote");
  }

  function copyQuote() {
    const textField = document.createElement('textarea');
    textField.innerText = `"${quote.text}" - ${quote.author}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('Quote copied to clipboard!');
    setCopy("code copied");
  }

  return (

    <div>
      
      <h1 style={{ color: '#4d1922', fontSize: '50px' }}>
        <i>Random Quote Generator</i>
      </h1>
      <div >
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
        <br/>
        <CopyToClipboard>
        <button onClick={copyQuote}>{copy}</button>
        </CopyToClipboard>
      </section>
      </div>
    </div>
  );
}

export default Home;
