import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Products from "../components/Products"

import SEO from "../components/SEO"
export default ({ data }) => {
  const {
    allContentfulProducts: { edges: products },
  } = data
  return (
    <Layout>
      <Services />
      <Products products={products} title="Our Products"></Products>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProducts {
      edges {
        node {
          id
          productName
          category
          description
          price
          productImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
