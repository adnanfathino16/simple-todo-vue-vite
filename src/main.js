import { createApp } from "vue";
import App from "./App.vue";

// mendaftar component menjadi global component
// import Child from "./components/Child.vue";

// konfigurasi setelah mendaftar
// createApp(App).component("child", Child).mount("#app");
//  atau ---------
// const app = createApp(App);
// app.component("child", Child);

// app.mount("#app");

// --------
createApp(App).mount("#app");
