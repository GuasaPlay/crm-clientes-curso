import gql from "graphql-tag";

export default gql`
    mutation createProduct($product: ProductInput!) {
        createProduct(product: $product) {
            code
            message
            product {
                id
                name
                price
                stock
            }
            success
        }
    }
`;
