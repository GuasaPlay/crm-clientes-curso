import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import "./index.css";

import router from "@/router";
import { apolloClient } from "./apollo/apolloClient";

createApp(App)
    .provide(DefaultApolloClient, apolloClient)
    .use(router)
    .mount("#app");
