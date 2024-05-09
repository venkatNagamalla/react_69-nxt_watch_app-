import Headers from '../Headers'
import NavBar from '../NavBar'
import {SavedVideosContainer, Container} from './styledComponents'

const SavedVideos = () => (
  <>
    <Headers />
    <SavedVideosContainer>
      <NavBar />
      <Container>
        <h1>Saved</h1>
      </Container>
    </SavedVideosContainer>
  </>
)

export default SavedVideos
