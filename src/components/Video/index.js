import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import NavBar from '../NavBar'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import Context from '../../context/Context'

import {
  VideoContainer,
  Container,
  RetryContainer,
  RetryButton,
} from './styledComponents'
import SingleVideoDetails from '../SingleVideoDetails'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

const Video = props => {
  const [videoDetails, setVideoDetails] = useState({
    details: {},
    apiStatus: apiStatusConstants.initial,
  })

  const modifyChannel = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
    subscriberCount: obj.subscriber_count,
  })

  const modify = obj => ({
    id: obj.id,
    description: obj.description,
    publishedAt: obj.published_at,
    thumbnailUrl: obj.thumbnail_url,
    title: obj.title,
    videoUrl: obj.video_url,
    viewCount: obj.view_count,
    channel: modifyChannel(obj.channel),
  })

  const getVideos = async () => {
    setVideoDetails({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = modify(data.video_details)
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
          <SingleVideoDetails
            data-testid="videoItemDetails"
            videoDetails={videoDetails.details}
          />
        )

        const renderVideoDetails = () => {
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
            <VideoContainer>
              <NavBar />
              <Container bgColor={bgColor}>{renderVideoDetails()}</Container>
            </VideoContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Video
