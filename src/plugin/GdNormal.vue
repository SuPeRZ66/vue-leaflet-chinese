<template></template>

<script setup>
import { useRegister } from "../hook/register"
import L from "leaflet"
import { watch } from "vue"

const { $childComponentInstance, $maphandler } = useRegister()

const props = defineProps({
  option: {
    type: Object,
    default: {
      maxZoom: 18,
      minZoom: 5,
    },
    required: false,
  },
})

const initlayer = (map) => {
  let normalm = L.tileLayer.chinaProvider("GaoDe.Normal.Map", {
    ...props.option,
  })
  let group = L.layerGroup([normalm])
  group.addTo(map)
  $childComponentInstance.value = group
}

// $getmap().then((map) => {
//   initlayer(map.value)
// })
initlayer($maphandler.value)
// watch(
//   () => props,
//   () => {
//     console.log("props change")
//   },
//   {
//     deep: true,
//   }
// )

const $$instance = $childComponentInstance
defineExpose({
  $$instance,
})
</script>
