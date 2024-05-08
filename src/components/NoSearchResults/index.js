import Context from '../../context/Context'
import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsText,
} from './styledComponents'

const NoSearchResults = () => (
  <Context.Consumer>
    {value => {
      const {theme} = value

      const headingColor = theme ? '#ffffff' : '#000000'
      const textColor = theme ? '#64748b' : '#64748b'

      return (
        <NoResultsContainer>
          <NoResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultsHeading color={headingColor}>
            No Search results found
          </NoResultsHeading>
          <NoResultsText color={textColor}>
            Try different key words or remove search filter
          </NoResultsText>
        </NoResultsContainer>
      )
    }}
  </Context.Consumer>
)

export default NoSearchResults
