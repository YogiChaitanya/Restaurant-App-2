import {Component} from 'react'

import Home from './components/Home'
import CartContext from './context/CartContext'
import './App.css'

// write your code here

class App extends Component {
  state = {cartList: []}

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
        }}
      >
        <Home />
      </CartContext.Provider>
    )
  }
}

export default App
