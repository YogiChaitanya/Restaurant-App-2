import './index.css'

const Header = props => {
  const {cartList} = props
  const count = cartList.length

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <p className="cart-count-badge">{count}</p>
    </div>
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
