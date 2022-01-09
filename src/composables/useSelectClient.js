import { ref } from "vue";

export default () => {
    const selectedClient = ref();

    const selectClient = (client) => {
        selectedClient.value = client;
        const emit = defineEmits(["slt"]);
        emit("slt", client);
    };

    return { selectClient, selectedClient };
};
