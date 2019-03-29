import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import "../stylesheets/product-item.css"
import "../stylesheets/add-button.css"
import "../stylesheets/all-info.css"
import "../stylesheets/flex-container.css"
import "../stylesheets/photo.css"

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="flex-container" style={{ marginBottom: 20 }}>

    <div className="photo" >
      <p>photohere</p>
    </div>

    <div className="all-info" >
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />

      <div className="add-button">
        <button
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>

    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
