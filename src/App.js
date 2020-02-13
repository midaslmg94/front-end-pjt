<<<<<<< HEAD
import React, {Component, Fragment} from 'react';
import React from 'react'
class App extends Component {
    render() {
        return (
            <Fragment>

              cl
            </Fragment>
        );
    }
}
=======
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
>>>>>>> 34b2a1bb4713d251bece419e02c5b477708c5724
