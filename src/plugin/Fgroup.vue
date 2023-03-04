<template>
  <slot></slot>
</template>

<script setup>
import { provide, inject, toRaw, onUnmounted } from "vue"
const $mapinstance = inject("maphandler")
let layer = L.featureGroup().addTo(toRaw($mapinstance.value))
provide("featureGrouphandler", layer)

const event_type = ["click", "dblclick", "mouseover", "mouseout"]
const emits = defineEmits(["click", "dblclick", "mouseover", "mouseout"])

event_type.forEach((item) => {
  layer.on(item, function (e) {
    emits(item, e.layer, e.layer.customdata)
  })
})

onUnmounted(() => {
  layer.remove()
})

const $$instance = layer
defineExpose({
  $$instance,
})
</script>
