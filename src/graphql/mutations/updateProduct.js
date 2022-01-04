import gql from "graphql-tag";

export default gql`
    mutation updateProduct($productId: ID!, $product: ProductInput!) {
        updateProduct(productId: $productId, product: $product) {
            code
            message
            success
            product {
                id
                name
                price
                stock
            }
        }
    }
`;
