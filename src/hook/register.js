import { onMounted, inject, ref, watch, onUnmounted } from "vue"
export const useRegister = () => {
  const $getmap = inject("mapinstance")
  const $maphandler = inject("maphandler")
  let $childComponentInstance = ref(null)
  onUnmounted(() => {
    if ($childComponentInstance.value !== null) {
      $childComponentInstance.value.remove()
    }
  })
  return {
    $getmap,
    $childComponentInstance,
    $maphandler,
  }
}
