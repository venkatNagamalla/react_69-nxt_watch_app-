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
            Oops! Something Went Wrong
          </NoResultsHeading>
          <NoResultsText color={textColor}>
            We are having some trouble to complete your request. Please try
            again.
          </NoResultsText>
        </NoResultsContainer>
      )
    }}
  </Context.Consumer>
)

export default NoSearchResults
