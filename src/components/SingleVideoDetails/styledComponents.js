import styled from 'styled-components'

export const VideoMainContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`

export const PlayerContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const VideoDescContainer = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 0px;
    margin-top: 15px;
  }
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 450;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ViewsLikesContainer = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const LikesSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`

export const LikeButton = styled.button`
  width: 80px;
  height: 35px;
  display: flex;
  border: none;
  align-items: center;
  font-size: 18px;
  color: ${props => props.color};
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
`
export const DisLikeButton = styled.button`
  width: 80px;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: none;
  margin-right: 25px;
  cursor: pointer;
  color: ${props => props.color};
  background-color: transparent;
`
export const SaveButton = styled.button`
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: none;
  color: #64748b;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
`

export const Line = styled.hr`
  border: 1px solid #d7dfe9;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const CommentsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const ChannelImg = styled.img`
  width: 55px;
`

export const ChannelNameContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-weight: 400;
`
export const ChannelDesc = styled.p`
  color: #64748b;
  font-size: 14px;
`

export const Comment = styled.p`
  color: ${props => props.color};
  font-weight: 400;
`
