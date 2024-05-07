import Context from '../../context/Context'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styledComponents'

const FailureView = () => (
  <Context.Consumer>
    {value => {
      const {theme} = value
      const imgUrl = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const headingColor = theme ? '#ffffff' : '#000000'
      const textColor = theme ? '#64748b' : '#64748b'

      return (
        <FailureContainer>
          <FailureImage src={imgUrl} alt="failure image" />
          <FailureHeading color={headingColor}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureText color={textColor}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureText>
        </FailureContainer>
      )
    }}
  </Context.Consumer>
)

export default FailureView
