import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recette from './pages/Recette';
import './App.css';
import GetData from './functions/GetData'
console.log(window.location.pathname)

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cocktail/*' render={() => <Recette data = {GetData(window.location.pathname)}/>}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;