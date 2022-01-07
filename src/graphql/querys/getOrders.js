import gql from "graphql-tag";

export default gql`
    query getOrders {
        getOrders {
            code
            message
            success
            orders {
                clientId
                id
                orderStatus
                orderDetail {
                    productId
                    productName
                    productPrice
                    productQuantity
                }
                client {
                    id
                    name
                    email
                    phone
                }
                totalPay
            }
        }
    }
`;
