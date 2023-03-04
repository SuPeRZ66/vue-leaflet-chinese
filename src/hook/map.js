import L from "leaflet"
import "proj4leaflet"
import "../utils/leaflet.china"
import { onMounted, ref, watch, defineProps, onUnmounted } from "vue"

export const useMap = (props = {}) => {
  const mapref = ref(null)
  let maphandler = ref(null)
  const initmap = () => {
    let opt = {
      ...props.option,
    }
    if ("crs" in opt && opt.crs == "baidu") {
      opt.crs = L.CRS.Baidu
    }
    let map = L.map(mapref.value, opt)
    maphandler.value = map
  }
  onMounted(() => {
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
