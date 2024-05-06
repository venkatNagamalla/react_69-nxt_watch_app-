import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import Headers from '../Headers'
import NavBar from '../NavBar'
import Context from '../../context/Context'

import {
  HomeContainer,
  Container,
  InputContainer,
  Input,
  SearchButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [videoDetails, setVideoDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    details: [],
  })

  const getVideos = async () => {
    setVideoDetails({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <Context.Consumer>
      {value => {
        const {theme} = value

        const bgColor = theme ? '#000000' : '#ffffff'
        const color = theme ? '#ffffff' : '#000000'

        const onSearchBtnClick = () => {
          getVideos()
        }

        const renderSearchInput = () => (
          <InputContainer>
            <Input
              color={color}
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              bgColor={bgColor}
              placeholder="Search"
              type="text"
            />
            <SearchButton type="button" onClick={onSearchBtnClick}>
              <IoIosSearch />
            </SearchButton>
          </InputContainer>
        )

        return (
          <>
            <Headers />
            <HomeContainer>
              <NavBar />
              <Container bgColor={bgColor}>
                {/* renderPopup */}
                {renderSearchInput()}
              </Container>
            </HomeContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Home
