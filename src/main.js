import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// Requiring global components
const requireComponent = require.context(
  "./components/global",
  true,
  /[A-Z]\w+\.(vue|js)$/
);

const app = createApp(App);


// Injecting global components
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const fileNameWithoutExtension = fileName.split('/').slice(-1)[0].replace(/\.[^/.]+$/, "");
  const componentName = upperFirst(
    camelCase(fileNameWithoutExtension)
  );

  app.component(componentName, componentConfig.default || componentConfig);
});




app
  .use(store)
  .use(router)
  .mount("#app");
