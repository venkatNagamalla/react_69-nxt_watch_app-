import {
  VideoItemContainer,
  Thumbnail,
  VideoDetailsContainer,
  ChannelProfile,
  TitleContainer,
  Title,
  ChannelName,
  ChannelDetailsContainer,
  ViewsContainer,
  Views,
  Years,
} from './styledComponents'
import Context from '../../context/Context'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails

  const {name, profileImageUrl} = channel

  return (
    <Context.Consumer>
      {value => {
        const {theme} = value

        const color = theme ? '#ebebeb' : '#231f20'

        return (
          <VideoItemContainer>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ChannelProfile src={profileImageUrl} alt="channel logo" />
              <TitleContainer>
                <Title color={color}>{title}</Title>
                <ChannelDetailsContainer>
                  <ChannelName>{name}</ChannelName>
                  <ViewsContainer>
                    <Views>{viewCount} views</Views>
                    <Years>{publishedAt}</Years>
                  </ViewsContainer>
                </ChannelDetailsContainer>
              </TitleContainer>
            </VideoDetailsContainer>
          </VideoItemContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoItem
