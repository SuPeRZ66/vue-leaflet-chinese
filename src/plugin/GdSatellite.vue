<template></template>

<script setup>
import { useRegister } from "../hook/register"
import L from "leaflet"
import { watch, nextTick } from "vue"

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
  var imgm = L.tileLayer.chinaProvider("GaoDe.Satellite.Map", {
    ...props.option,
  })
  var imga = L.tileLayer.chinaProvider("GaoDe.Satellite.Annotion", {
    ...props.option,
  })
  let group = L.layerGroup([imgm, imga])
  group.addTo(map)
  $childComponentInstance.value = group
}

initlayer($maphandler.value)

const $$instance = $childComponentInstance
defineExpose({
  $$instance,
})
</script>
