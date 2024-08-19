import './index.css'
import {
  VisitedCountryLiItem,
  VisitedCountryImage,
  VisitedCountryInfo,
  RemoveCountryButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {eachVisitedCountry, updateRemoveItem} = props
  const {imageUrl, name, id} = eachVisitedCountry

  const onClickRemoveItem = () => {
    updateRemoveItem(id)
  }
  return (
    <VisitedCountryLiItem>
      <VisitedCountryImage src={imageUrl} alt="thumbnail" />
      <p className="visited-country-title">{name}</p>
      <VisitedCountryInfo>
        <RemoveCountryButton onClick={onClickRemoveItem}>
          Remove
        </RemoveCountryButton>
      </VisitedCountryInfo>
    </VisitedCountryLiItem>
  )
}
export default VisitedCountryItem
