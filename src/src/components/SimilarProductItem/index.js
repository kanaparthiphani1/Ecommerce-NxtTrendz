import './index.css'
import {Link} from 'react-router-dom'

const SimilarProductItem = props => {
  const {productDetails, onChangeItem} = props
  const {id, title, brand, imageUrl, rating, price} = productDetails

  const onClickItem = () => {
    onChangeItem(id)
  }

  return (
    <li className="similar-product-item" onClick={onClickItem}>
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
