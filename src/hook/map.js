import L from "leaflet"
import "../utils/leaflet.china"
import { onMounted, ref, watch, defineProps, onUnmounted } from "vue"

export const useMap = (props = {}) => {
  const mapref = ref(null)
  let maphandler = ref(null)
  const initmap = () => {
    let map = L.map(mapref.value, {
      center: [31.41, 120.98],
      zoom: 13,
      zoomAnimation: true,
    })
    maphandler.value = map
  }
  onMounted(() => {
    console.log("father load")
    initmap()
  })

  onUnmounted(() => {
    console.log("father destroy")
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
