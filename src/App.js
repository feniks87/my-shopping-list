import React, { Component } from 'react';
import './Styles.css';
import ShoppingList from './container/ShoppingList';
import Background from '../src/assets/images/shopping.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
}

class App extends Component {
  render() {
    return (
      <div style={backgroundImage} >
        <header className="App-header">
          <h1>Shopping List <FontAwesomeIcon icon={faShoppingBasket}/> </h1>
        </header>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;