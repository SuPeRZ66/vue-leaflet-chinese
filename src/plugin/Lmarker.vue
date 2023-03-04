<template></template>

<script setup>
import L from "leaflet"
import { useEvent } from "../hook/useEvent"
import { watch, nextTick, onMounted, onUnmounted, toRaw, inject } from "vue"

const $mapinstance = inject("maphandler")
const emits = defineEmits(["click", "dblclick", "mouseover", "mouseout"])

const parent =
  inject("layerGrouphandler") ||
  inject("featureGrouphandler") ||
  toRaw($mapinstance.value)

const props = defineProps({
  option: {
    type: Object,
    default: {},
    required: false,
  },
  position: {
    type: Object,
    default: {},
    required: true,
  },
  data: {
    type: Object,
    default: {},
    required: false,
  },
})

const render = () => {
  const opt = {
    ...props.option,
  }

  if ("icon" in opt) {
    opt.icon = L.icon(opt.icon)
  }

  let latlng = L.latLng(props.position.lat, props.position.lng)

  let markerinstance = new L.Marker(latlng, opt)
  markerinstance.customdata = props.data
  markerinstance.addTo(parent)
  useEvent(markerinstance, emits)
  return markerinstance
}
let markerinstance = render()
onMounted(() => {})
onUnmounted(() => {
  markerinstance.off()
  markerinstance.remove()
})

watch(
  () => props,
  () => {
    markerinstance.off()
    markerinstance.remove()
    markerinstance = render()
  },
  {
    deep: true,
  }
)

const $$instance = markerinstance
defineExpose({
  $$instance,
})
</script>
