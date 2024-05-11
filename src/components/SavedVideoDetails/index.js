import {Link} from 'react-router-dom'
import {
  VideoList,
  Thumbnail,
  ViewsContainer,
  DescriptionContainer,
  ChannelName,
  Title,
  Years,
  Views,
  ChannelImg,
  ImageContainer,
} from './styledComponents'
import Context from '../../context/Context'

const SavedVideoDetails = props => {
  const {videoDetails} = props

  const {
    id,
    thumbnailUrl,
    title,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <Context.Consumer>
      {value => {
        const {theme} = value

        const color = theme ? '#ebebeb' : '#231f20'

        return (
          <Link className="link-item" to={`/videos/${id}`}>
            <VideoList>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ImageContainer>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <DescriptionContainer>
                  <Title color={color}>{title}</Title>
                  <ChannelName>{name}</ChannelName>
                  <ViewsContainer>
                    <Views>{viewCount} views</Views>
                    <Years>{publishedAt}</Years>
                  </ViewsContainer>
                </DescriptionContainer>
              </ImageContainer>
            </VideoList>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default SavedVideoDetails
