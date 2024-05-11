import {useState, useEffect} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import Headers from '../Headers'
import NavBar from '../NavBar'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import {
  GamingContainer,
  RetryButton,
  RetryContainer,
  GamingVideosListContainer,
  Container,
  BannerSection,
  Card,
  Text,
} from './styledComponents'
import Context from '../../context/Context'
import GamingItem from '../GamingItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

const Gaming = () => {
  const [videoDetails, setVideoDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    details: [],
  })

  const modify = obj => ({
    id: obj.id,
    thumbnailUrl: obj.thumbnail_url,
    title: obj.title,
    viewCount: obj.view_count,
  })

  const getVideos = async () => {
    setVideoDetails({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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

        const bgColor = theme ? '#0f0f0f' : '#f8fafc'
        const bannerBg = theme ? '#606060' : '#f1f1f1'
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
          <GamingVideosListContainer>
            {videoDetails.details.map(eachVideo => (
              <GamingItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </GamingVideosListContainer>
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

        const renderBanner = () => (
          <BannerSection bgColor={bannerBg}>
            <Card>
              <SiYoutubegaming color="#ff0000" size={25} />
            </Card>
            <Text color={color}>Gaming</Text>
          </BannerSection>
        )

        return (
          <>
            <Headers />
            <GamingContainer>
              <NavBar />
              <Container data-testid="gaming" bgColor={bgColor}>
                {renderBanner()}
                {renderVideos()}
              </Container>
            </GamingContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Gaming
