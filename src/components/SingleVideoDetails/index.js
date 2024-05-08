import {useState} from 'react'
import ReactPlayer from 'react-player'
import {RiAddBoxFill} from 'react-icons/ri'
import {BiLike, BiDislike} from 'react-icons/bi'
import Context from '../../context/Context'
import {
  VideoMainContainer,
  PlayerContainer,
  VideoDescContainer,
  Title,
  ViewsLikesContainer,
  ViewsContainer,
  Views,
  Years,
  LikesSaveContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  Line,
  ChannelDesc,
  ChannelImg,
  ChannelName,
  ChannelNameContainer,
  CommentsContainer,
  Comment,
} from './styledComponents'

const SingleVideoDetails = props => {
  const [isLiked, setIsLiked] = useState('')

  const handleLike = () => setIsLiked(true)
  const handleDislike = () => setIsLiked(false)

  const {videoDetails} = props
  const {
    videoUrl,
    // id,
    publishedAt,
    viewCount,
    title,
    description,
    channel,
  } = videoDetails

  const {name, profileImageUrl, subscriberCount} = channel
  return (
    <Context.Consumer>
      {value => {
        const {theme} = value

        const color = theme ? '#f1f1f1' : '#000000'

        const fontColor = theme ? '#f1f1f1' : '#64748b'

        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isLiked === false ? '#2563eb' : '#64748b'

        return (
          <VideoMainContainer data-testid="videoItemDetails">
            <PlayerContainer>
              <ReactPlayer height="100%" width="100%" url={videoUrl} controls />
            </PlayerContainer>
            <VideoDescContainer>
              <Title color={color}>{title}</Title>
              <ViewsLikesContainer>
                <ViewsContainer>
                  <Views>{viewCount} views</Views>
                  <Years>{publishedAt}</Years>
                </ViewsContainer>
                <LikesSaveContainer>
                  <LikeButton
                    color={likeColor}
                    type="button"
                    onClick={handleLike}
                  >
                    <BiLike /> Like
                  </LikeButton>
                  <DisLikeButton
                    color={dislikeColor}
                    type="button"
                    onClick={handleDislike}
                  >
                    <BiDislike />
                    Dislike
                  </DisLikeButton>
                  <SaveButton>
                    <RiAddBoxFill /> Save
                  </SaveButton>
                </LikesSaveContainer>
              </ViewsLikesContainer>
              <Line />
              <CommentsContainer>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <ChannelNameContainer>
                  <ChannelName color={color}>{name}</ChannelName>
                  <ChannelDesc>{subscriberCount} subscribers</ChannelDesc>
                </ChannelNameContainer>
              </CommentsContainer>
              <Comment color={fontColor}>{description}</Comment>
            </VideoDescContainer>
          </VideoMainContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default SingleVideoDetails
