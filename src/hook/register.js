import { onMounted, inject, ref, watch, onUnmounted } from "vue"
import L from "leaflet"
export const useRegister = () => {
  //const $getmap = inject("mapinstance")
  const $maphandler = inject("maphandler")
  let $childComponentInstance = ref(null)
  console.log("hook", $maphandler.value)
  onUnmounted(() => {
    if ($childComponentInstance.value !== null) {
      $childComponentInstance.value.remove()
    }
  })
  return {
    $childComponentInstance,
    $maphandler,
  }
}
