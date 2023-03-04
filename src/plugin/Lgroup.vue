<template>
  <slot></slot>
</template>

<script setup>
import { provide, inject, toRaw, onUnmounted } from "vue"
const $mapinstance = inject("maphandler")
let layer = L.layerGroup().addTo(toRaw($mapinstance.value))
provide("layerGrouphandler", layer)

onUnmounted(() => {
  layer.remove()
})

const $$instance = layer
defineExpose({
  $$instance,
})
</script>
