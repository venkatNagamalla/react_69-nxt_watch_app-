import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 23%;
    margin-top: 50px;
  }
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
`

export const RetryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 80vh;
  margin-top: 5px;
`

export const VideosListContainer = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

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
