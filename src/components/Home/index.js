import Headers from '../Headers'
import NavBar from '../NavBar'
import {HomeContainer} from './styledComponents'

const Home = () => (
  <>
    <Headers />
    <HomeContainer>
      <NavBar />
      <h1>Home</h1>
    </HomeContainer>
  </>
)

export default Home
