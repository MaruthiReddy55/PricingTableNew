import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import Pricenew from './components/Pricenew';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div>
              <Pricenew/>
          </div>
    );
  }
}
