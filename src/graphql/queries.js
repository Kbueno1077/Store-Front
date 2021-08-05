/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($productId: ID!) {
    getProduct(productId: $productId) {
      id
      name
      description
      shortDescription
      mainImage
      extraImages
      createdAt
      updatedAt
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($limit: Int!, $nextToken: String) {
    getProducts(limit: $limit, nextToken: $nextToken) {
      products {
        id
        name
        description
        shortDescription
        mainImage
        extraImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
