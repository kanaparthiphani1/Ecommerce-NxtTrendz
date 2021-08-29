import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const removeAll = () => {
        removeAllCartItems()
      }

      const totalSum = () => {
        console.log(cartList)

        const x = cartList.reduce((acc, cur) => {
          console.log(acc)
          return acc + cur.price * cur.quantity
        }, 0)
        console.log(x)

        return x
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <p className="remove-all" onClick={removeAll}>
                  Remove All
                </p>
                <CartListView />
                <div className="order-summary">
                  <h1 className="order-total-text-label">
                    Order Total :<span className="total"> Rs {totalSum()}</span>
                  </h1>
                  <p className="itemsSize">{cartList.length} items in List</p>
                  <button type="button" className="checkOutBtn">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
