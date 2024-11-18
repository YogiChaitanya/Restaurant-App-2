import {Component} from 'react'
import './index.css'

class DishItem extends Component {
  state = {quantity: 0}

  onIncreaseQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }))
  }

  onDecreaseQuantity = () => {
    const {quantity} = this.state
    if (quantity >= 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
      }))
    }
  }

  renderControllerButton = () => {
    const {quantity} = this.state

    return (
      <div className="controller-container">
        <button
          onClick={this.onDecreaseQuantity}
          className="p-m-button"
          type="button"
        >
          -
        </button>

        <p className="quantity">{quantity}</p>
        <button
          onClick={this.onIncreaseQuantity}
          className="p-m-button"
          type="button"
        >
          +
        </button>
      </div>
    )
  }

  render() {
    const {dishDetails} = this.props

    const {
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

    return (
      <li className="dish-item-container">
        <div
          className={`border ${
            dishType === 1 ? 'non-veg-border' : 'veg-border'
          } `}
        >
          <div
            className={`round ${
              dishType === 1 ? 'non-veg-round' : 'veg-round'
            } `}
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
            this.renderControllerButton()
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
}

export default DishItem
