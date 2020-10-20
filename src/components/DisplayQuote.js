import React from "react";

function DisplayQuote({ simpson }) {
  return (
    <div>
      <p>perso : {simpson.character}</p>
      <p>citation : {simpson.quote}</p>
      <img src={simpson.image} />
    </div>
  );
}

export default DisplayQuote;
