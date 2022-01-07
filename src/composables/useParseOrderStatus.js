export default () => {
    const parseOrderStatus = (order) => {
        const { orderStatus } = order;

        const textsOrderStatus = {
            PENDING: "PENDIENTE",
            CANCELED: "CANCELADO",
            DELIVERED: "DESPACHADO",
        };
        const colorsOrderStatus = {
            PENDING: "bg-yellow-500",
            CANCELED: "bg-red-600",
            DELIVERED: "bg-green-500",
        };

        const colorsBorderOrderStatus = {
            PENDING: "border-yellow-500 shadow-yellow-500/10",
            CANCELED: "border-red-500 shadow-red-500/10",
            DELIVERED: "border-green-500 shadow-green-500/10",
        };

        return {
            colorBorderStatus: colorsBorderOrderStatus[orderStatus],
            colorStatus: colorsOrderStatus[orderStatus],
            textStatus: textsOrderStatus[orderStatus],
        };
    };

    return { parseOrderStatus };
};
