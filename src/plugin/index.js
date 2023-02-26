// import LeafletMap from "./LeafletMap.vue"
import { defineAsyncComponent } from "vue"
const requireModules = import.meta.glob("./*.vue")

export default {
  install: (app, options) => {
    for (const path in requireModules) {
      const componentName = path.substring(
        path.lastIndexOf("/") + 1,
        path.lastIndexOf(".")
      )
      const modulesConent = requireModules[path]
      app.component(componentName, defineAsyncComponent(modulesConent))
    }

    // app.component("LeafletMap", LeafletMap)
  },
}
