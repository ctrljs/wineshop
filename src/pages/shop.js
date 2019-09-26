import React from "react"
import Layout from "../components/layout/Layout"
import Shop from "../components/shop/Shop"

const shop = ({ data }) => {
  return (
    <Layout>
      <Shop allWines={data.allStrapiWines.edges} />
    </Layout>
  )
}

export const query = graphql`
  query WineList {
    allStrapiWines {
      edges {
        node {
          id
          wine_name
          price
          wine_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default shop
