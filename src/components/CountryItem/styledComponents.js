import styled from 'styled-components'

export const CountryLiItem = styled.li`
  list-style-type: none;
  background-color: #1f1f2f;
  padding-left: 30px;
  border-bottom: 1px solid #334155;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 20px;
  padding-left: 0px;
  margin-left: 0px;
`

export const CountryVisitButton = styled.button`
  height: 35px;
  width: 100px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  margin-right: 80px;

  color: ${props => (props.isVisit ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.isVisit ? 'transparent' : '#3b82f6')};

  border: none;
  border-radius: 5px;
`
export const VisitedText = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  margin-right: 110px;
`
