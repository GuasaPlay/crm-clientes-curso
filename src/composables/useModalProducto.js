import { ref } from "vue";

export default () => {
    const productSelected = ref({});

    const showModalNuevoProducto = ref(false);
    const openModalNuevoProducto = () => (showModalNuevoProducto.value = true);
    const closeModalNuevoProducto = () =>
        (showModalNuevoProducto.value = false);

    const showModalEditarProducto = ref(false);
    const openModalEditarProducto = (product) => {
        showModalEditarProducto.value = true;
        productSelected.value = product;
    };
    const closeModalEditarProducto = () => {
        showModalEditarProducto.value = false;
        productSelected.value = {};
    };

    const showModalEliminarProducto = ref(false);
    const openModalEliminarProducto = (product) => {
        showModalEliminarProducto.value = true;
        productSelected.value = product;
    };
    const closeModalEliminarProducto = () =>
        (showModalEliminarProducto.value = false);

    return {
        productSelected,

        showModalNuevoProducto,
        openModalNuevoProducto,
        closeModalNuevoProducto,

        showModalEditarProducto,
        openModalEditarProducto,
        closeModalEditarProducto,

        showModalEliminarProducto,
        openModalEliminarProducto,
        closeModalEliminarProducto,
    };
};
