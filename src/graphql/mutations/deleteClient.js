import gql from "graphql-tag";

export default gql`
    mutation deleteClient($clientId: ID!) {
        deleteClient(clientId: $clientId) {
            code
            message
            success
            client {
                id
            }
        }
    }
`;
