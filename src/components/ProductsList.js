import React from 'react'
import PropTypes from 'prop-types'
import "../stylesheets/products-list.css"


const ProductsList = ({ title, children }) => (
  <div className="products-list">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
