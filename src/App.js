import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import GenerateEmployee from './GenerateEmployee.js';
import DisplayEmployee from './DisplayEmployee.js'
import GenerateQuote from "./GenerateQuote";
import DisplayQuote from "./DisplayQuote";


const sampleQuotes = {
	quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
	character: 'Nelson Muntz',
	image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
};

class App extends Component {
  
//    sampleEmployee = {
//     gender:  'male',
//     name: {
//         title:  'mr',
//         first:  'mathys',
//         last:  'aubert'
//     },
//     location: {
//         street:  '9467 rue gasparin',
//         city:  'perpignan',
//         postcode:  '90208'
//     },
//     email:  'mathys.aubert@example.com',
//     picture: {
//         medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
//     }
// };
  
//   getEmployee() {
//     // Récupération de l'employé via fetch
//     fetch("https://randomuser.me/api?nat=fr")
//       .then(response  =>  response.json())
//       .then(data  => {
//         // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
//         this.setState({
//           employee:  data.results[0],
//         });
//     });
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       // on peut mettre notre sampleEmployee par défaut
//       // afin d'avoir toujours un employé d'affiché
      
//       employee:  this.sampleEmployee
//     };
//   }



  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuotes
      
    };
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data[0]
        })
      })
      }

  render() {
    


  return (
    
    <div className="App">
      {/* <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
      <DisplayEmployee  employee={this.state.employee}  /> */}

    <GenerateQuote selectQuote={() => this.getQuote()} />
    <DisplayQuote quotes={this.state.quotes}/>

    </div>
  );
}

}


export default App;
