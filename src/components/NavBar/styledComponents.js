import styled from 'styled-components'

export const MobileIconsContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px 0px 5px;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavContainer = styled.nav`
  border: 1px solid #000;
`

export const Icon = styled.li`
  height: 50px;
  padding: 5px;
  width: 25%;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    width: 100%;
    margin: 0px;
    padding: 18px;
  }
`

export const DeskIconsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
`

export const IconName = styled.p`
  color: ${props => props.color};
  margin-left: 25px;
  font-weight: ${props => props.bold};
`

export const SideBar = styled.div`
  @media screen and (min-width: 768px) {
    width: 22%;
    height: 100vh;
    position: fixed;
    top: 53px;
    background-color: ${props => props.background};
  }
`
