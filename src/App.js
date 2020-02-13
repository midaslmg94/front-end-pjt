import React, { Component, Fragment } from 'react';
import Chart from './components/Chart/Chart';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return(
      <Fragment>
        <Chart /> 
      </Fragment>
    );
  }
}

export default App;