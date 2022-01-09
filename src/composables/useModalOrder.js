import { ref } from "vue";

export default () => {
    const showModalBuscarCliente = ref(false);
    const openModalBuscarCliente = () => {
        showModalBuscarCliente.value = true;
    };
    const closeModalBuscarCliente = () =>
        (showModalBuscarCliente.value = false);

    const showModalBuscarProducto = ref(false);
    const openModalBuscarProducto = () => {
        showModalBuscarProducto.value = true;
    };
    const closeModalBuscarProducto = () =>
        (showModalBuscarProducto.value = false);

    return {
        showModalBuscarCliente,
        openModalBuscarCliente,
        closeModalBuscarCliente,

        openModalBuscarProducto,
        showModalBuscarProducto,
        closeModalBuscarProducto,
    };
};
