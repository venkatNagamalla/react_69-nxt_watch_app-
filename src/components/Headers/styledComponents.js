import styled from 'styled-components'

export const NavContainer = styled.nav`
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px 10px 25px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 10px 45px 10px 45px;
  }
`

export const WebsiteLogo = styled.img`
  width: 100px;
`
export const ThemeButton = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  background-color: transparent;
  cursor: pointer;
`

export const LogOutButton = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Profile = styled.img`
  width: 25px;
  @media screen and (min-width: 768px) {
    width: 28px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const DeskLogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 33px;
    width: 90px;
    border-radius: 2px;
    border: 1.5px solid ${props => props.color};
    color: ${props => props.color};
    background-color: transparent;
    cursor: pointer;
  }
`

export const PopUpContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 8px;
`

export const PopUpHeading = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 405;
  color: ${props => props.color};
`
export const CancelButton = styled.button`
  width: 90px;
  height: 40px;
  color: #94a3b8;
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  cursor: pointer;
  font-size: 15px;
`
export const ConfirmButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: #3b82f6;
  border: none;
  color: #fff;
  font-size: 15px;
  border-radius: 2px;
  cursor: pointer;
`

export const PopUpButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`

export const HeadingContainer = styled.div`
  width: 100%;
`
