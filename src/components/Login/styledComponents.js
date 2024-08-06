import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const LoginCard = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 8px;
  height: 400px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 130px;
    margin-bottom: 10px;
  }
`

export const FormContainer = styled.form`
  width: 100%;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  width: 100%;
  height: 38px;
  margin-top: 13px;
  border-radius: 3px;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 5px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
`
