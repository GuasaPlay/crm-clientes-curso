import gql from "graphql-tag";

export default gql`
    query getClients {
        getClients {
            code
            message
            success
            clients {
                company
                email
                id
                name
                phone
            }
        }
    }
`;
