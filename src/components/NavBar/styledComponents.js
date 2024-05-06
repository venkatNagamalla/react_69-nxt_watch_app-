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

export const Icon = styled.li`
  padding: 5px;
  height: 50px;
  width: 25%;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    border: 1px solid #000;
    justify-content: flex-start;
    padding: 8px;
    width: 100%;
    margin: 5px 0px 10px 0px;
  }
`

export const DeskIconsContainer = styled.div`
  border: 1px solid #000;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
`

export const IconName = styled.p`
  color: ${props => props.color};
  margin-left: 10px;
`

export const SideBar = styled.div`
  @media screen and (min-width: 768px) {
    border: 1px solid #000;
    width: 15%;
    height: 100vh;
    background-color: ${props => props.background};
  }
`
