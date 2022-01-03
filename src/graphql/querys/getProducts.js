import gql from "graphql-tag";

export default gql`
    query Query {
        getProducts {
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
