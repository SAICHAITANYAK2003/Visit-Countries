import styled from 'styled-components'

export const VisitedCountryLiItem = styled.li`
  background-color: #1f1f2f;
  height: 250px;
  width: 250px;
  border-radius: 20px;
  padding: 10px;
`

export const VisitedCountryImage = styled.img`
  height: 120px;
  width: 100%;
  border-radius: 5px;
`

export const VisitedCountryInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const RemoveCountryButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
