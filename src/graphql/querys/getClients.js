import gql from "graphql-tag";

export default gql`
    query getClients($search: String) {
        getClients(search: $search) {
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
