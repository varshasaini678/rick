import React from 'react';
import PropTypes from 'prop-types';
import DisplayList from '../src/js/list-repeat.js';
import './App.css';

//
//const App = () => <h1>hey . this is stateless</h1>
class App extends React.Component {

  constructor(){
    super();
  }




  componentDidMount(){
  //  this.fetchCharacters();
  }

  render() {
    return <div> 

     <DisplayList/>
     </div>
  }
}



export default App;
