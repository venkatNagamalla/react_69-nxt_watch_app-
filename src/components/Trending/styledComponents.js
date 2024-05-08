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
  height: 100%;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`

export const InputContainer = styled.div`
  border: 1px solid #475569;
  height: 38px;
  margin: 20px;
  @media screen and (min-width: 576px) {
    width: 70%;
    margin: 0px;
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
