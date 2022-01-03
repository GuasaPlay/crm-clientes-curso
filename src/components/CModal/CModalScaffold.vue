<template>
    <div
        id="CModal"
        class="fixed bg-black/50 top-0 bottom-0 left-0 right-0 z-50"
    >
        <div class="w-screen h-screen flex justify-center items-center">
            <div
                class="custom-scroll-modal bg-white max-h-[calc(100%_-_40px)] w-[calc(100%_-_16px)] sm:w-[auto] sm:max-w-[calc(100%_-_50px)] md:max-w-[calc(100%_-_200px)] lg:max-w-[calc(100%_-_400px)] xl:max-w-[calc(100%_-_600px)] overflow-auto rounded-lg"
            >
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { onBeforeUnmount, onMounted } from "vue";
onMounted(() => {
    const targetElement = document.querySelector("#CModal");
    disableBodyScroll(targetElement);
});

onBeforeUnmount(() => {
    const targetElement = document.querySelector("#CModal");
    enableBodyScroll(targetElement);
});
</script>
<style lang="postcss">
.custom-scroll-modal::-webkit-scrollbar {
    width: 20px;
}

.custom-scroll-modal::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #aaaaaa;
}
</style>
