// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    const ele = (
      <>
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="logo"
          />
          <ul className="nav-links">
            <li className="nav-link"> Home</li>
            <li className="nav-link">Products</li>
            <li className="nav-link">Cart</li>
            <li className="logout ">Logout</li>
          </ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="logout-sm"
            alt="img"
          />
        </div>
        <ul className="nav-links-sm">
          <li className="nav-link-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              className="img-sm"
              alt=""
            />
          </li>
          <li className="nav-link-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              className="img-sm"
              alt=""
            />
          </li>
          <li className="nav-link-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="img-sm"
              alt=""
            />
          </li>
        </ul>
      </>
    )
    return ele
  }
}

export default Header
