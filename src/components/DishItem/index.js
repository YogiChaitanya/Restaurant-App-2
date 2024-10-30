import './index.css'

const DishItem = props => {
  const {dishDetails, cartList, incrementQuantity, decrementQuantity} = props

  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => {
    incrementQuantity(dishId)
  }
  const onDecreaseQuantity = () => {
    decrementQuantity(dishId)
  }

  const getQuantity = () => {
    const cartItemQuantity = cartList.find(item => item.dishId === dishId)
    return cartItemQuantity ? cartList.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="controller-container">
      <button onClick={onDecreaseQuantity} className="p-m-button" type="button">
        -
      </button>

      <p className="quantity">{getQuantity()}</p>
      <button onClick={onIncreaseQuantity} className="p-m-button" type="button">
        +
      </button>
    </div>
  )

  return (
    <li className="dish-item-container">
      <div
        className={`border ${
          dishType === 1 ? 'non-veg-border' : 'veg-border'
        } `}
      >
        <div
          className={`round ${dishType === 1 ? 'non-veg-round' : 'veg-round'} `}
        />
      </div>

      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>

        <div className="dish-currency-price-container">
          <p className="dish-currency-price">{dishCurrency}</p>
          <p className="dish-currency-price">{dishPrice}</p>
        </div>

        <p className="dish-description">{dishDescription}</p>

        {dishAvailability ? (
          renderControllerButton()
        ) : (
          <p className="not-availability-text">Not available</p>
        )}

        {addonCat.length !== 0 && (
          <p className="customization-text" key={addonCat}>
            Customizations available
          </p>
        )}
      </div>

      <p className="dish-calories"> {dishCalories} calories</p>
      <div>
        <img src={dishImage} className="dish-image" alt={dishName} />
      </div>
    </li>
  )
}

export default DishItem
