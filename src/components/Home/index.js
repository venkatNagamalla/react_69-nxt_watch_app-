import {useState, useEffect} from 'react'

import Cookies from 'js-cookie'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
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
  RetryButton,
  RetryContainer,
  VideosListContainer,
  PopupContainer,
  WebsiteLogo,
  Popup,
  PopupText,
  PopupBtn,
  Close,
} from './styledComponents'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import NoSearchResults from '../NoSearchResults'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [banner, setBanner] = useState(true)
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

        const bgColor = theme ? '#181818' : '#f8fafc'
        const color = theme ? '#f1f1f1' : '#181818'

        const inputBg = theme ? '#000000' : '#f8fafc'

        const onSearchBtnClick = () => {
          getVideos()
        }

        const onClose = () => setBanner(false)

        const renderSearchInput = () => (
          <InputContainer>
            <Input
              color={color}
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              bgColor={inputBg}
              placeholder="Search"
              type="search"
              onKeyDown={e => e.key === 'Enter' && getVideos()}
            />
            <SearchButton
              data-testid="searchButton"
              type="button"
              onClick={onSearchBtnClick}
            >
              <IoIosSearch />
            </SearchButton>
          </InputContainer>
        )

        const renderLoaderView = () => <LoaderView />

        const renderFailureView = () => (
          <RetryContainer>
            <FailureView />
            <RetryButton type="button" onClick={getVideos}>
              Retry
            </RetryButton>
          </RetryContainer>
        )

        const renderListOfVideos = () => (
          <VideosListContainer>
            {videoDetails.details.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosListContainer>
        )

        const renderNoResults = () => (
          <RetryContainer>
            <NoSearchResults />
            <RetryButton type="button" onClick={getVideos}>
              Retry
            </RetryButton>
          </RetryContainer>
        )

        const renderSuccessView = () =>
          videoDetails.details.length === 0
            ? renderNoResults()
            : renderListOfVideos()

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

        const renderPopup = () => (
          <PopupContainer data-testid="banner" bgColor={bgColor}>
            <Popup>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <PopupText>
                Buy Nxt Watch Premium prepaid plans with UPI
              </PopupText>
              <PopupBtn>GET IT NOW</PopupBtn>
            </Popup>
            <Close data-testid="close" type="button" onClick={onClose}>
              <IoMdClose size={20} />
            </Close>
          </PopupContainer>
        )

        return (
          <>
            <Headers />
            <HomeContainer>
              <NavBar />
              <Container data-testid="home" bgColor={bgColor}>
                {banner && renderPopup()}
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
