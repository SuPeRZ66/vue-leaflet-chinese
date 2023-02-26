<script setup>
// import LeafletMap from "./plugin/LeafletMap.vue"
// import test from "./plugin/Test.vue"
// import GdNormal from "./plugin/GdNormal.vue"
// import GdSatellite from "./plugin/GdSatellite.vue"
import { ref } from "vue"
const key = "f7ea3e17748cfaaee4b48f8bff839502"
const txt = ref("隐藏")
const show = ref(true)
const zoom = ref(18)
const changeshow = () => {
  show.value = !show.value
  console.log(show.value)
  txt.value = !show.value ? "显示" : "隐藏"
  //zoom.value = 10
  console.log(zoom.value)
}
const opt = {
  maxZoom: 15,
  minZoom: 5,
}
</script>

<template>
  <LeafletMap :keys="key" style="width: 500px; height: 500px">
    <!-- <GdNormal /> -->
    <GdSatellite v-if="show" :option="opt" />
  </LeafletMap>
  <button @click="changeshow">{{ txt }}</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
