<script setup>
// import LeafletMap from "./plugin/LeafletMap.vue"
// import test from "./plugin/Test.vue"
// import GdNormal from "./plugin/GdNormal.vue"
// import GdSatellite from "./plugin/GdSatellite.vue"
import myimg from "./assets/logo.jpeg"
import L from "leaflet"
import { ref } from "vue"
const myfgroup = ref()
const key = ref("f7ea3e17748cfaaee4b48f8bff839502")
const txt = ref("隐藏")
const show = ref(true)
const zoom = ref(18)
const changeshow = () => {
  show.value = !show.value

  arr.value = show.value
    ? [
        {
          lat: 31.27,
          lng: 121.13,
        },
      ]
    : [
        {
          lat: 31.48,
          lng: 121.914,
        },
      ]

  latlngs.value = show.value
    ? [
        [31.45, 120.99],
        [31.27, 121.13],
        [31.48, 121.914],
      ]
    : []
  console.log(show.value)
  txt.value = !show.value ? "显示" : "隐藏"
  //zoom.value = 10
}
const opt = {
  maxZoom: 15,
  minZoom: 1,
}
const arr = ref([
  {
    lat: 31.27,
    lng: 121.13,
  },
])

const markerclick = (e, data) => {
  console.log("in marker click")
  console.log(e)
  console.log(data)
}
const layerclick = (e, data) => {
  console.log("in layer click")
  console.log(e)
  console.log(data)
  // let i = myfgroup.value.$$instance
  // console.log(i.getLayers())
}
const myopt = {
  icon: {
    iconUrl: myimg,
  },
}

var latlngs = ref([
  [31.45, 120.99],
  [31.27, 121.13],
  [31.48, 121.914],
])
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
  // crs: "baidu",
})
</script>

<template>
  <LeafletMap :option="mapoption" style="width: 500px; height: 500px">
    <!-- <GdNormal /> -->
    <Fgroup @click="layerclick" ref="myfgroup">
      <Lmarker
        v-for="(item, index) in arr"
        :key="index"
        :position="item"
        :option="myopt"
        @click="markerclick"
      >
      </Lmarker>
    </Fgroup>
    <!-- <BdSatellite /> -->
    <TianSatellite :tk="key" :option="opt" />
    <!-- <GdSatellite :option="opt" /> -->
    <!-- <Lpolygon :latlngs="latlngs" @click="markerclick" :data="myopt" /> -->
    <Lpolyline :latlngs="latlngs" @click="markerclick" :data="myopt" />
    <!-- <Lmarker
      v-for="(item, index) in arr"
      :key="index"
      :position="item"
      @click="markerclick"
      :option="myopt"
    >
    </Lmarker> -->
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
