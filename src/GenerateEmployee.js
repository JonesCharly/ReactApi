import  React  from  'react';
import './GenerateEmployee.css'

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee}>Get employee</button>
        </div>
    );
};

export  default  GenerateEmployee;