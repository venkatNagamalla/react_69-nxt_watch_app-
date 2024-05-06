import Headers from '../Headers'
import NavBar from '../NavBar'
import {SavedVideosContainer} from './styledComponents'

const SavedVideos = () => (
  <>
    <Headers />
    <SavedVideosContainer>
      <NavBar />
      <h1>Saved</h1>
    </SavedVideosContainer>
  </>
)

export default SavedVideos
