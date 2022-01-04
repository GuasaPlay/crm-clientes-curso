import { ref } from "vue";

export default () => {
    const clientSelected = ref({});

    const showModalNuevoCliente = ref(false);
    const openModalNuevoCliente = () => (showModalNuevoCliente.value = true);
    const closeModalNuevoCliente = () => (showModalNuevoCliente.value = false);

    const showModalEditarCliente = ref(false);
    const openModalEditarCliente = (client) => {
        showModalEditarCliente.value = true;
        clientSelected.value = client;
    };
    const closeModalEditarCliente = () => {
        showModalEditarCliente.value = false;
        clientSelected.value = {};
    };

    const showModalEliminarCliente = ref(false);
    const openModalEliminarCliente = (client) => {
        showModalEliminarCliente.value = true;
        clientSelected.value = client;
    };
    const closeModalEliminarCliente = () =>
        (showModalEliminarCliente.value = false);

    return {
        clientSelected,

        showModalNuevoCliente,
        openModalNuevoCliente,
        closeModalNuevoCliente,

        showModalEditarCliente,
        openModalEditarCliente,
        closeModalEditarCliente,

        showModalEliminarCliente,
        openModalEliminarCliente,
        closeModalEliminarCliente,
    };
};
