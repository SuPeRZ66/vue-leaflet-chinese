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
  latlngs: {
    type: Array,
    default: [],
    required: true,
  },
  data: {
    type: Object,
    default: {},
    required: false,
  },
})

const render = () => {
  let lineinstance = L.polyline(props.latlngs, props.option)
  lineinstance.customdata = props.data
  lineinstance.addTo(parent)
  useEvent(lineinstance, emits)
  return lineinstance
}

let lineinstance = render()

watch(
  () => props,
  () => {
    lineinstance.off()
    lineinstance.remove()
    lineinstance = render()
  },
  {
    deep: true,
  }
)

onMounted(() => {})
onUnmounted(() => {
  lineinstance.off()
  lineinstance.remove()
})

const $$instance = lineinstance
defineExpose({
  $$instance,
})
</script>
