// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    const ele = (
      <div className="outer-cont">
        <Header />
        <div className="home-cont">
          <div className="matter-cont">
            <h1 className="matter-head">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="home-img-sm"
              alt="img"
            />
            <p className="matter-para">
              Fashion is part of daily air and it doesnot quite help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heard that way you are. So, celebrate the season new and exciting
              fashion in your own way.
            </p>
            <button className="cust-btn" type="button">
              Show Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="home-img"
            alt="img"
          />
        </div>
      </div>
    )
    return ele
  }
}

export default Home
