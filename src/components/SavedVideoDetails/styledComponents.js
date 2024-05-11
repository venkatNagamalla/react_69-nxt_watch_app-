import styled from 'styled-components'

export const VideoList = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 48%;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;
`

export const Title = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 450;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ChannelName = styled.p`
  font-size: 18px;
  color: #64748b;
  font-weight: 405;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  @media screen and (min-width: 576px) {
    width: 49%;
    height: 270px;
    margin-left: 10px;
  }
`

export const ChannelImg = styled.img`
  width: 50px;
  margin-right: 13px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  @media screen and (min-width: 576px) {
    margin-top: 10px;
  }
`

export const Views = styled.p`
  color: #64748b;
  margin-right: 35px;
  font-size: 15px;
  font-weight: 405;
`

export const Years = styled.p`
  color: #64748b;
  font-size: 15px;
  font-weight: 405;
`
