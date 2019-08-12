import  React  from  'react';

const  DisplayQuote = ({ quotes }) => {
    return (
        <div  className="DisplayQuotes">
            <img  src={quotes.image}  alt="picture"  />
            <h2>{quotes.character}</h2>
            <p>{quotes.quote}</p>
            <p>{quotes.characterDirection}</p>
        </div>
    );
};

export  default  DisplayQuote;