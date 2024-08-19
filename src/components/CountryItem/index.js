import {
  CountryLiItem,
  CountryName,
  CountryVisitButton,
  VisitedText,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, updateVisit, isVisit} = props
  const {name, id} = countryDetails

  const onClickChangeVisit = () => {
    updateVisit(id)
  }
  return (
    <CountryLiItem>
      <CountryName>{name}</CountryName>
      {isVisit ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <CountryVisitButton type="button" onClick={onClickChangeVisit}>
          Visit
        </CountryVisitButton>
      )}
    </CountryLiItem>
  )
}
export default CountryItem
