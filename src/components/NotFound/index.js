import Headers from '../Headers'
import NavBar from '../NavBar'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
  Container,
  NotFoundMainContainer,
} from './styledComponents'
import Context from '../../context/Context'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {theme} = value

      const bgColor = theme ? '#181818' : '#f8fafc'
      const color = theme ? '#f1f1f1' : '#181818'

      const url = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const renderNotFound = () => (
        <NotFoundContainer>
          <NotFoundImg src={url} alt="not found" />
          <NotFoundHeading color={color}>Page Not Found</NotFoundHeading>
          <NotFoundText>
            We are sorry, the page you requested could not be found
          </NotFoundText>
        </NotFoundContainer>
      )

      return (
        <>
          <Headers />
          <NotFoundMainContainer>
            <NavBar />
            <Container bgColor={bgColor}>{renderNotFound()}</Container>
          </NotFoundMainContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default NotFound
