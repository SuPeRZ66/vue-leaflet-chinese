import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import myplugin from "./plugin/index"

createApp(App)
  .use(myplugin, {
    test: 11,
  })
  .mount("#app")
