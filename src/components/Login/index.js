import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  LoginCard,
  Logo,
  FormContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

import Context from '../../context/Context'

class Login extends Component {
  state = {errorMsg: '', isError: false}

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = error => {
    this.setState({errorMsg: error, isError: true})
  }

  onSubmit = async e => {
    e.preventDefault()

    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const loginApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderFormItems = () => {
    const {isError, errorMsg} = this.state
    return (
      <FormContainer onSubmit={this.onSubmit}>
        <LoginButton type="submit">Login</LoginButton>
        {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
      </FormContainer>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {theme} = value

          const bgColor = theme ? '#000000' : '#ffffff'
          const color = theme ? '#ffffff' : '#000000'

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <MainContainer bgColor={bgColor}>
              <LoginCard bgColor={bgColor}>
                {theme ? (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                {this.renderFormItems()}
              </LoginCard>
            </MainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
