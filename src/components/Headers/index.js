import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'
import {
  NavContainer,
  LogOutButton,
  WebsiteLogo,
  ThemeButton,
  Profile,
  ButtonsContainer,
  DeskLogoutButton,
  PopUpHeading,
  PopUpContainer,
  CancelButton,
  ConfirmButton,
  HeadingContainer,
  PopUpButtonsContainer,
} from './styledComponents'
import Context from '../../context/Context'

const Headers = props => (
  <Context.Consumer>
    {value => {
      const {theme, changeTheme} = value

      const color = theme ? '#ffffff' : '#000000'
      const bgColor = theme ? '#000000' : '#ffffff'

      const deskLogout = theme ? '#ffffff' : '#4f46e5'

      const onLogOut = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('./login')
      }

      const logo = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavContainer bgColor={bgColor}>
          <Link to="/">
            <WebsiteLogo src={logo} alt="website logo" />
          </Link>

          <ButtonsContainer>
            <ThemeButton
              data-testid="theme"
              onClick={changeTheme}
              type="button"
            >
              {theme ? (
                <FiSun size={20} color={color} />
              ) : (
                <FaMoon size={20} color={color} />
              )}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogOutButton data-tesid="logout" type="button">
                  <FiLogOut size={20} color={color} />
                </LogOutButton>
              }
            >
              {close => (
                <PopUpContainer bgColor={bgColor}>
                  <HeadingContainer>
                    <PopUpHeading color={color}>
                      Are you sure you want to logout?
                    </PopUpHeading>
                  </HeadingContainer>
                  <PopUpButtonsContainer>
                    <CancelButton
                      data-testid="close"
                      onClick={() => close()}
                      type="button"
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton
                      data-testid="confirm"
                      type="button"
                      onClick={onLogOut}
                    >
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </PopUpContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <DeskLogoutButton
                  data-tesid="logout"
                  type="button"
                  color={deskLogout}
                >
                  Logout
                </DeskLogoutButton>
              }
            >
              {close => (
                <PopUpContainer bgColor={bgColor}>
                  <HeadingContainer>
                    <PopUpHeading color={color}>
                      Are you sure, you want to logout
                    </PopUpHeading>
                  </HeadingContainer>
                  <PopUpButtonsContainer>
                    <CancelButton onClick={() => close()} type="button">
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onLogOut}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </PopUpContainer>
              )}
            </Popup>
          </ButtonsContainer>
        </NavContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Headers)
