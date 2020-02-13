import React, { Component, Fragment } from 'react';
import MainTemplate from './components/MainTemplate';
import { Button } from 'reactstrap'
import Example from './components/Example';
import './App.css';

class App extends Component {
  render(){
    return(
      <Fragment>
        <MainTemplate></MainTemplate>
        <div> <Button color="primary">로그인</Button>{''} </div>
        <div className="hc" className="vc">
          <Example></Example>
        </div>
        
      </Fragment>
    );
  }
}
export default App;