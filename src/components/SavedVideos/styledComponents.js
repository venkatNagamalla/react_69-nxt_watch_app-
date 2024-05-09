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
