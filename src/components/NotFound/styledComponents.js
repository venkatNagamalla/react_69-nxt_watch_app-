import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NotFoundImg = styled.img`
  width: 70%;
  @media screen and (min-width: 786px) {
    width: 40%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  margin-top: 10px;
`
export const NotFoundText = styled.p`
  color: #64748b;
  font-size: 16px;
  margin-top: 8px;
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
export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
