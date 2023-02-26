import L from "leaflet"
import "../utils/leaflet.china"
import { onMounted, ref, watch, defineProps, onUnmounted } from "vue"
export const useMap = (props = {}) => {
  const mapref = ref(null)
  let maphandler = ref(null)
  const initmap = () => {
    let map = L.map(mapref.value, {
      center: [31.59, 120.29],
      zoom: 13,
    })
    maphandler.value = map
  }
  onMounted(() => {
    initmap()
  })

  onUnmounted(() => {
    if (maphandler.value) maphandler.value.remove()
  })

  const getMap = () => {
    return new Promise((reslove, reject) => {
      onMounted(() => {
        reslove(maphandler)
      })
    })
  }

  return {
    mapref,
    maphandler,
    getMap,
  }
}
