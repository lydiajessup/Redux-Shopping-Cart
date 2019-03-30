import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import "../stylesheets/add-button.css"
import "../stylesheets/all-info.css"
import "../stylesheets/flex-container.css"
import "../stylesheets/photo.css"
import "../stylesheets/button.css"
import logo from '../api/pic.svg';


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="flex-container" style={{ marginBottom: 20 }}>

    <div className="photo" >
      <p>
      <img src={logo} alt="Logo" />
      </p>
    </div>

    <div className="all-info" >
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />

      <div className="add-button">
        <button className="button"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
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
