import {RiVideoAddFill} from 'react-icons/ri'
import Headers from '../Headers'
import NavBar from '../NavBar'
import {
  SavedVideosContainer,
  Container,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
  VideosListContainer,
  BannerSection,
  Card,
  Text,
} from './styledComponents'
import Context from '../../context/Context'
import SavedVideoDetails from '../SavedVideoDetails'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {theme, savedVideosList} = value

      const bannerBg = theme ? '#606060' : '#f1f1f1'

      const bgColor = theme ? '#0f0f0f' : '#f8fafc'

      const color = theme ? '#f8fafc' : '#0f0f0f'

      const renderNoVideos = () => (
        <NoVideosContainer>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading color={color}>No saved videos found</NoVideosHeading>
          <NoVideosText>
            You can save your videos while watching them
          </NoVideosText>
        </NoVideosContainer>
      )

      const renderSavedVideos = () => (
        <VideosListContainer>
          {savedVideosList.map(eachVideo => (
            <SavedVideoDetails key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideosListContainer>
      )

      const renderBanner = () => (
        <BannerSection bgColor={bannerBg}>
          <Card>
            <RiVideoAddFill color="#ff0000" size={25} />
          </Card>
          <Text color={color}>Saved Videos</Text>
        </BannerSection>
      )

      return (
        <>
          <Headers />
          <SavedVideosContainer>
            <NavBar />
            <Container data-testid="savedVideos" bgColor={bgColor}>
              {renderBanner()}
              {savedVideosList.length === 0
                ? renderNoVideos()
                : renderSavedVideos()}
            </Container>
          </SavedVideosContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
