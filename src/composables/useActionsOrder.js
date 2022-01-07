import { useMutation } from "@vue/apollo-composable";
import dispatchOrderMutation from "@/graphql/mutations/dispatchOrder";
import cancelOrderMutation from "@/graphql/mutations/cancelOrder";

export default () => {
    const { mutate: dispatchMutation } = useMutation(dispatchOrderMutation);
    const { mutate: cancelMutation } = useMutation(cancelOrderMutation);

    const dispatchOrder = (order) => dispatchMutation({ orderId: order.id });

    const cancelOrder = (order) => cancelMutation({ orderId: order.id });

    return { dispatchOrder, cancelOrder };
};
