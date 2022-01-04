import gql from "graphql-tag";

export default gql`
    mutation createClient($client: ClientInput!) {
        createClient(client: $client) {
            code
            message
            success
            client {
                company
                email
                id
                name
                phone
            }
        }
    }
`;
