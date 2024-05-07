import Loader from 'react-loader-spinner'
import Context from '../../context/Context'
import './index.css'

const LoaderView = () => (
  <Context.Consumer>
    {value => {
      const {theme} = value

      const color = theme ? '#ffffff' : '#3b82f6'

      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color={color} height="50" width="50" />
        </div>
      )
    }}
  </Context.Consumer>
)

export default LoaderView
