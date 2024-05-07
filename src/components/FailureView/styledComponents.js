import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const FailureImage = styled.img`
  width: 70%;
  @media screen and (min-width: 769px) {
    width: 30%;
  }
`

export const FailureHeading = styled.h1`
  font-size: 21px;
  font-weight: 430;
  margin-bottom: 5px;
  color: ${props => props.color};
  margin-top: 10px;
`

export const FailureText = styled.p`
  font-size: 17px;
  font-weight: 430;
  padding: 5px;
  text-align: center;
  color: ${props => props.color};
  margin-bottom: 5px;
`
