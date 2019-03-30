import React from 'react'
import PropTypes from 'prop-types'
import "../stylesheets/product.css"
import "../stylesheets/price.css"
import "../stylesheets/inventory.css"
import "../stylesheets/title.css"

const Product = ({ price, inventory, title }) => (
  <div className="product">

    <div className="title">
      {title}
    </div>

    <div className="price">
      &#36;{price}
    </div>

    <div className="inventory">
      {inventory ? `${inventory} REMAINING ` : null}
    </div>

  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
