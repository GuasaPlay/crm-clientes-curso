import gql from "graphql-tag";

export default gql`
    mutation dispatchOrder($orderId: ID!) {
        dispatchOrder(orderId: $orderId) {
            code
            message
            success
            order {
                client {
                    email
                    id
                    name
                    phone
                }
                clientId
                id
                orderDetail {
                    productId
                    productName
                    productPrice
                    productQuantity
                }
                orderStatus
                totalPay
            }
        }
    }
`;
