import gql from "graphql-tag";

export default gql`
    query getProducts($search: String) {
        getProducts(search: $search) {
            code
            message
            products {
                id
                name
                price
                stock
            }
            success
        }
    }
`;
