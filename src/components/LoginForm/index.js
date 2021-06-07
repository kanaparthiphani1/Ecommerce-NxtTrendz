// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', usernotFound: false}

  onUsernameChange = event => {
    this.setState({username: event.target.value, usernotFound: false})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value, usernotFound: false})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userBody = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userBody),
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const jsonResp = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess()
      } else {
        this.setState({usernotFound: true})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  render() {
    const {username, password, usernotFound} = this.state
    const ele = (
      <div className="login-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-logo-sm"
          alt="img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="loginImg"
          alt="img"
        />
        <div className="login-comp">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-logo"
            alt="img"
          />
          <form className="login-form" onSubmit={this.onFormSubmit}>
            <label className="usr-lbl" htmlFor="user">
              USERNAME
            </label>
            <input
              type="text"
              name="username"
              className="input-cmp"
              value={username}
              id="user"
              placeholder="Username"
              onChange={this.onUsernameChange}
            />
            <label className="usr-lbl" htmlFor="pass">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="input-cmp"
              id="pass"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
            <button type="submit" className="cust-form-btn">
              Login
            </button>
            {usernotFound && (
              <span className="userNotFound">
                *Username and Password didn't Match
              </span>
            )}
          </form>
        </div>
      </div>
    )
    return ele
  }
}

export default LoginForm
