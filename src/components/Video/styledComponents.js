import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150vh;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    flex-direction: row;
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
