import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import Headers from '../Headers'
import NavBar from '../NavBar'
import Context from '../../context/Context'
import LoaderView from '../LoaderView'

import {
  HomeContainer,
  Container,
  InputContainer,
  Input,
  SearchButton,
  FailureButton,
  FailureContainer,
} from './styledComponents'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'

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

  const modifyChannelDetails = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
  })

  const modify = obj => ({
    id: obj.id,
    publishedAt: obj.published_at,
    title: obj.title,
    thumbnailUrl: obj.thumbnail_url,
    viewCount: obj.view_count,
    channel: modifyChannelDetails(obj.channel),
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
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => modify(eachVideo))
      console.log(updatedData)
      setVideoDetails({
        details: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      setVideoDetails({apiStatus: apiStatusConstants.failure})
    }
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <Context.Consumer>
      {value => {
        const {theme} = value

        const bgColor = theme ? '#000000' : '#f1f1f1'
        const color = theme ? '#ffffff' : '#000000'

        const inputBg = theme ? '#000000' : '#ffffff'

        const onSearchBtnClick = () => {
          getVideos()
        }

        const renderSearchInput = () => (
          <InputContainer>
            <Input
              color={color}
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              bgColor={inputBg}
              placeholder="Search"
              type="text"
            />
            <SearchButton type="button" onClick={onSearchBtnClick}>
              <IoIosSearch />
            </SearchButton>
          </InputContainer>
        )

        const renderLoaderView = () => <LoaderView />

        const renderFailureView = () => (
          <FailureContainer>
            <FailureView />
            <FailureButton type="button" onClick={getVideos}>
              Retry
            </FailureButton>
          </FailureContainer>
        )

        const renderSuccessView = () => (
          <ul>
            {videoDetails.details.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </ul>
        )

        const renderVideos = () => {
          switch (videoDetails.apiStatus) {
            case apiStatusConstants.inProgress:
              return renderLoaderView()
            case apiStatusConstants.failure:
              return renderFailureView()
            case apiStatusConstants.success:
              return renderSuccessView()
            default:
              return null
          }
        }

        return (
          <>
            <Headers />
            <HomeContainer>
              <NavBar />
              <Container bgColor={bgColor}>
                {/* renderPopup */}
                {renderSearchInput()}
                {renderVideos()}
              </Container>
            </HomeContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Home
