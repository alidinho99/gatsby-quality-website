import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Product = ({
  id,
  productName,
  category,
  description,
  price,
  productImage,
}) => {
  return (
    <Link to={`/`} className="blog" key={id}>
      <article>
        {productImage && (
          <Image fluid={productImage.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{productName}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>KD {price}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productImage: PropTypes.object.isRequired,
}

export default Product
