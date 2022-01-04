import gql from "graphql-tag";

export default gql`
    mutation deleteProduct($productId: ID!) {
        deleteProduct(productId: $productId) {
            code
            message
            success
            product {
                id
            }
        }
    }
`;
