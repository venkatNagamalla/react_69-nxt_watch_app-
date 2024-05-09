import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  width: calc(50% - 20px);
  flex: 0 0 calc(50%- 20px);
  margin: 10px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: calc(33% - 20px);
    flex: 0 0 calc(33% - 20px);
  }
  @media screen and (min-width: 768px) {
    width: calc(25% - 20px);
    flex: 0 0 calc(25% - 20px);
  }
`

export const GamingImage = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: bold;
  margin-top: 5px;
`

export const Views = styled.p`
  font-size: 15px;
  color: #475569;
  font-weight: 410;
  margin-top: 8px;
`
