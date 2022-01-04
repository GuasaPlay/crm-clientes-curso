import gql from "graphql-tag";

export default gql`
    mutation updateClient($clientId: ID!, $client: ClientInput!) {
        updateClient(clientId: $clientId, client: $client) {
            code
            message
            success
            client {
                id
                name
                company
                email
                phone
            }
        }
    }
`;
