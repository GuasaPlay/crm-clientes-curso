import gql from "graphql-tag";

export default gql`
    mutation createOrder($order: OrderInput!) {
        createOrder(order: $order) {
            code
            message
            success
            order {
                clientId
                id
                orderStatus
                totalPay
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
            }
        }
    }
`;
