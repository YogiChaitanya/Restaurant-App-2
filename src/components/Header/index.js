import CartContext from '../../context/CartContext'

import './index.css'

const Header = () => {
  const renderCartIcon = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartCount = cartList.length

        return (
          <div className="cart-icon-container">
            <p className="cart-count-badge">{cartCount}</p>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="header-container">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="orders-container">
        <p className="my-order-text">My Orders</p>

        {renderCartIcon()}
      </div>
    </nav>
  )
}

export default Header
