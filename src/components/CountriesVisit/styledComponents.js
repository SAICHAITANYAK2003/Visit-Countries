import styled from 'styled-components'

export const VisitCountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #161624;
  height: 110vh;
  padding-top: 20px;
  padding-left: 40px;
`
export const CountiriesTitle = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-weight: 500;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  height: 40vh;
  overflow-y: scroll;
  scrollbar: visible;

  border: 1.5px solid #334155;
  border-radius: 10px;
  padding-left: 0;
  margin-left: 0;
`
export const VisitedCountriesContainer = styled.div``

export const VisitedCountriesTitle = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-weight: 400;
`
export const VisitedCountriesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30vh;
`

export const EmptyTitle = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`
