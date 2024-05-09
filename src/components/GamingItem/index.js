import {Link} from 'react-router-dom'
import {GamingVideoItem, GamingImage, Title, Views} from './styledComponents'
import Context from '../../context/Context'
import './index.css'

const GamingItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <Context.Consumer>
      {value => {
        const {theme} = value
        const color = theme ? '#f1f1f1' : '#181818'

        return (
          <GamingVideoItem>
            <Link className="link" to={`/videos/${id}`}>
              <GamingImage src={thumbnailUrl} alt="" />
              <Title color={color}>{title}</Title>
              <Views>{viewCount} Watching Worldwide</Views>
            </Link>
          </GamingVideoItem>
        )
      }}
    </Context.Consumer>
  )
}

export default GamingItem
