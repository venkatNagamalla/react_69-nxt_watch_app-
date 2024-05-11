import styled from 'styled-components'

export const HomeContainer = styled.div`
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
  height: 100%;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 23%;
    margin-top: 50px;
  }
`

export const InputContainer = styled.div`
  border: 1px solid #475569;
  height: 38px;
  margin: 20px;

  @media screen and (min-width: 576px) {
    width: 70%;
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Input = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  padding: 15px;
  background-color: ${props => props.bgColor};
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.color};
`

export const SearchButton = styled.button`
  width: 20%;
  height: 99%;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #f1f1f1;
  border-left: 1px solid #475569;
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const PopupContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    margin: 13px;
    height: 200px;
    padding: 18px;
  }
`

export const Popup = styled.div`
  width: 95%;
`

export const WebsiteLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 576px) {
    width: 150px;
  }
`

export const PopupText = styled.p`
  color: #1f1f1f;
  font-size: 20px;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const PopupBtn = styled.button`
  border: 1px solid #1f1f1f;
  color: #1f1f1f;
  height: 40px;
  width: 120px;
  font-weight: 450;
  font-size: 16px;
  margin-top: 20px;
  background-color: transparent;
  @media screen and (min-width: 576px) {
    margin-top: 25px;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
