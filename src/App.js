import React, { Component, Fragment } from 'react';
import './App.css';
import MainTab from './components/MainTab';



class App extends Component {
  render(){
    return(
      <Fragment>
        <header><img width="140px" src="/로고.png" alt="이미지깨짐"></img></header>  
        <MainTab></MainTab>
        
               
        
      </Fragment>
    );
  }
}
export default App;