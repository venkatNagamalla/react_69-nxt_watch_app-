import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  list-style: none;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    flex: 0 0 calc(50% - 20px);
    width: calc(50% - 20px);
    margin: 8px;
  }
  @media screen and (min-width: 768px) {
    flex: 0 0 calc(33.33% - 20px);
    width: calc(33.33% - 20px);
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 100px;
  padding: 13px;
`

export const ChannelProfile = styled.img`
  width: 45px;
  @media screen and (min-width: 576px) {
    width: 40px;
  }
`

export const TitleContainer = styled.div`
  margin-left: 10px;
`
export const Title = styled.h1`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 400;
`

export const ChannelName = styled.p`
  font-size: 15px;
  color: #64748b;
  font-weight: 405;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

export const ViewsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  @media screen and (min-width: 576px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`

export const Views = styled.li`
  color: #64748b;
  margin-right: 35px;
  list-style-type: disc;
  font-size: 15px;
  font-weight: 405;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
`

export const Years = styled.li`
  color: #64748b;
  font-size: 15px;
  font-weight: 405;
  list-style-type: disc;
`
