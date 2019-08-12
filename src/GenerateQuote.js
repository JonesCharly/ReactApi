import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateQuote">
        <button  onClick={selectQuote}>Get a New Quote</button>
        </div>
    );
};

export  default  GenerateQuote;