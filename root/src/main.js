import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

const RemoteCounter = defineAsyncComponent(() => import("remote/Counter"));
app.component("RemoteCounter", RemoteCounter);

app.use(createPinia());

app.mount("#app");
