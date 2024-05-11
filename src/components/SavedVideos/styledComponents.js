import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 23%;
    margin-top: 50px;
  }
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export const NoVideosImg = styled.img`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const NoVideosHeading = styled.h1`
  color: ${props => props.color};
  font-weight: bold;
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const NoVideosText = styled.p`
  color: #64748b;
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideosListContainer = styled.ul``

export const BannerSection = styled.div`
  background-color: ${props => props.bgColor};
  padding: 15px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Card = styled.div`
  border-radius: 100px;
  background-color: #cbd5e1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

export const Text = styled.h1`
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.color};
`
