import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
