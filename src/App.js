import React from 'react';
import FluidComponent from './FluidComponent';

export default class App extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <FluidComponent options={{ food: "marmite"}}/>
        <FluidComponent options={{ food: "durian"}}/>
      </React.Fragment>
    );
  }
}