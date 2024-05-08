import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import Headers from '../Headers'
import NavBar from '../NavBar'
import Context from '../../context/Context'
import LoaderView from '../LoaderView'

import {
  TrendingContainer,
  Container,
  InputContainer,
  Input,
  SearchButton,
  RetryButton,
  RetryContainer,
  VideosListContainer,
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

const Trending = () => {
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
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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

        const bgColor = theme ? '#0f0f0f' : '#f1f1f1'
        const color = theme ? '#ffffff' : '#000000'

        const renderLoaderView = () => <LoaderView />

        const renderFailureView = () => (
          <RetryContainer>
            <FailureView />
            <RetryButton type="button" onClick={getVideos}>
              Retry
            </RetryButton>
          </RetryContainer>
        )

        const renderSuccessView = () => (
          <VideosListContainer data-testid="trending">
            {videoDetails.details.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosListContainer>
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
            <TrendingContainer>
              <NavBar />
              <Container bgColor={bgColor}>
                {/* {TrendingBanner} */}
                {renderVideos()}
              </Container>
            </TrendingContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Trending
