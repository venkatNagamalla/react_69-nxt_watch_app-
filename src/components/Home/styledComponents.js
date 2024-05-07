import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  background-color: ${props => props.bgColor};
  padding: 15px;
  width: 100%;
  height: 100%;
`

export const InputContainer = styled.div`
  border: 1px solid #475569;
  height: 38px;
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
  height: 100%;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #f1f1f1;
  border-left: 1px solid #475569;
`

export const FailureButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 80vh;
  margin-top: 5px;
`
