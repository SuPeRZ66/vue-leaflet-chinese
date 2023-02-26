<template>
  <div class="mapwrap">
    <div class="mapcontainer" ref="mapref"></div>
    <slot />
  </div>
</template>
<script setup>
import { onMounted, provide, ref, watch } from "vue"
import "leaflet/dist/leaflet.css"
// import L from "leaflet"
// import "../utils/leaflet.china"
import { useMap } from "../hook/map"
const props = defineProps({
  keys: {
    type: String,
    default: "",
    required: false,
  },
})
const { mapref, maphandler, getMap } = useMap(props)

provide("mapinstance", getMap)
provide("maphandler", maphandler)
</script>
<style scoped>
.mapwrap {
  height: 100%;
  width: 100%;
  position: relative;
}
.mapcontainer {
  height: 100%;
  width: 100%;
}
</style>
