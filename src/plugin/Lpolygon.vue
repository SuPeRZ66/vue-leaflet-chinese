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
  let polygoninstance = L.polygon(props.latlngs, props.option)
  polygoninstance.customdata = props.data
  polygoninstance.addTo(parent)
  useEvent(polygoninstance, emits)
  return polygoninstance
}
let polygoninstance = render()

watch(
  () => props,
  () => {
    polygoninstance.off()
    polygoninstance.remove()
    polygoninstance = render()
  },
  {
    deep: true,
  }
)

onMounted(() => {})
onUnmounted(() => {
  polygoninstance.off()
  polygoninstance.remove()
})

const $$instance = polygoninstance
defineExpose({
  $$instance,
})
</script>
