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
  tk: {
    type: String,
    default: "",
    required: true,
  },
})

const initlayer = (map) => {
  let normal1 = L.tileLayer.chinaProvider("TianDiTu.Normal.Map", {
    ...props.option,
    key: props.tk,
  })
  let normal2 = L.tileLayer.chinaProvider("TianDiTu.Normal.Annotion", {
    ...props.option,
    key: props.tk,
  })
  let group = L.layerGroup([normal1, normal2])
  group.addTo(map)
  $childComponentInstance.value = group
}

initlayer($maphandler.value)

const $$instance = $childComponentInstance
defineExpose({
  $$instance,
})
</script>
