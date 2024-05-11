import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {RiVideoAddFill} from 'react-icons/ri'
import {
  MobileIconsContainer,
  Icon,
  DeskIconsContainer,
  IconName,
  SideBar,
  SidebarContainer,
  Text,
  LogoIcons,
  IconsContainer,
  ContactText,
} from './styledComponents'
import Context from '../../context/Context'
import './index.css'

const NavBar = () => (
  <Context.Consumer>
    {value => {
      const {activeRoute, theme, changeActiveRoute} = value

      const background = theme ? '#181818' : '#ffffff'
      const color = theme ? '#64748b' : '#181818'

      const activeHomeBg = activeRoute === 'HOME' ? '#f1f5f9' : null
      const activeTrendingBg = activeRoute === 'TRENDING' ? '#f1f5f9' : null
      const activeGamingBg = activeRoute === 'GAMING' ? '#f1f5f9' : null
      const activeSavedBg = activeRoute === 'SAVED' ? '#f1f5f9' : null

      const textColor = theme ? '#ffffff' : '#181818'

      return (
        <>
          <MobileIconsContainer background={background}>
            <Icon bgColor={activeHomeBg}>
              <Link onClick={() => changeActiveRoute('HOME')} to="/">
                <AiFillHome
                  size={22}
                  color={activeRoute === 'HOME' ? 'red' : '#64748b'}
                />
              </Link>
            </Icon>

            <Icon bgColor={activeTrendingBg}>
              <Link
                onClick={() => changeActiveRoute('TRENDING')}
                to="/trending"
              >
                <ImFire
                  size={22}
                  color={activeRoute === 'TRENDING' ? 'red' : '#64748b'}
                />
              </Link>
            </Icon>
            <Icon bgColor={activeGamingBg}>
              <Link onClick={() => changeActiveRoute('GAMING')} to="/gaming">
                <SiYoutubegaming
                  size={22}
                  color={activeRoute === 'GAMING' ? 'red' : '#64748b'}
                />
              </Link>
            </Icon>
            <Icon bgColor={activeSavedBg}>
              <Link
                onClick={() => changeActiveRoute('SAVED')}
                to="/saved-videos"
              >
                <RiVideoAddFill
                  size={22}
                  color={activeRoute === 'SAVED' ? 'red' : '#64748b'}
                />
              </Link>
            </Icon>
          </MobileIconsContainer>
          <SideBar background={background}>
            <DeskIconsContainer>
              <Link
                className="link"
                onClick={() => changeActiveRoute('HOME')}
                to="/"
              >
                <Icon bgColor={activeHomeBg}>
                  <AiFillHome
                    color={activeRoute === 'HOME' ? 'red' : '#64748b'}
                  />
                  <IconName
                    bold={activeRoute === 'HOME' ? 'bold' : 'normal'}
                    color={color}
                  >
                    Home
                  </IconName>
                </Icon>
              </Link>
              <Link
                className="link"
                onClick={() => changeActiveRoute('TRENDING')}
                to="/trending"
              >
                <Icon bgColor={activeTrendingBg}>
                  <ImFire
                    color={activeRoute === 'TRENDING' ? 'red' : '#64748b'}
                  />
                  <IconName
                    bold={activeRoute === 'TRENDING' ? 'bold' : 'normal'}
                    color={color}
                  >
                    Trending
                  </IconName>
                </Icon>
              </Link>
              <Link
                className="link"
                onClick={() => changeActiveRoute('GAMING')}
                to="/gaming"
              >
                <Icon bgColor={activeGamingBg}>
                  <SiYoutubegaming
                    color={activeRoute === 'GAMING' ? 'red' : '#64748b'}
                  />
                  <IconName
                    bold={activeRoute === 'GAMING' ? 'bold' : 'normal'}
                    color={color}
                  >
                    Gaming
                  </IconName>
                </Icon>
              </Link>

              <Link
                className="link"
                onClick={() => changeActiveRoute('SAVED')}
                to="/saved-videos"
              >
                <Icon bgColor={activeSavedBg}>
                  <RiVideoAddFill
                    color={activeRoute === 'SAVED' ? 'red' : '#64748b'}
                  />
                  <IconName
                    bold={activeRoute === 'SAVED' ? 'bold' : 'normal'}
                    color={color}
                  >
                    Saved videos
                  </IconName>
                </Icon>
              </Link>
            </DeskIconsContainer>

            <SidebarContainer>
              <ContactText color={textColor}>CONTACT US</ContactText>
              <IconsContainer>
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="twitter logo"
                />
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="facebook logo"
                />
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <Text color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </Text>
            </SidebarContainer>
          </SideBar>
        </>
      )
    }}
  </Context.Consumer>
)

export default NavBar
