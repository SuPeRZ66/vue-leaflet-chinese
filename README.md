# 介绍

该插件是基于 vue3 和 leaflet 开发的用于方便加载国内地图，地图部分 option（如 map,marker,polygon,polyline）请参照 leaflet

## 怎么使用

1. `npm i vue-leaflet-chinese`

2. 在 main.js 处引入

```
import map from "vue-leaflet-chinese"
import "vue-leaflet-chinese/dist/style.css"
...
createApp(App).use(map).mount("#app")
```

## 地图初始化

## 高德

### 普通地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
</LeafletMap>
```

### 卫星地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap :option="mapoption" style="width: 500px; height: 500px">
<GdSatellite/>
</LeafletMap>
```

## 腾讯地图

### 普通地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap :option="mapoption" style="width: 500px; height: 500px">
<TxNormal/>
</LeafletMap>
```

### 卫星地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap :option="mapoption" style="width: 500px; height: 500px">
<TxSatellite/>
</LeafletMap>
```

## 天地图

### 普通地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
const key = ref("your tmap token") //天地图必须设置key
<LeafletMap  :tk="key" :option="mapoption" style="width: 500px; height: 500px">
<TianNormal/>
</LeafletMap>
```

### 卫星地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
const key = ref("your tmap token")
<LeafletMap :tk="key" :option="mapoption" style="width: 500px; height: 500px">
<TianSatellite/>
</LeafletMap>
```

## 百度地图

### 普通地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
  crs:'baidu' //百度地图必须配置此项
})

<LeafletMap  :tk="key" :option="mapoption" style="width: 500px; height: 500px">
<BdNormal/>
</LeafletMap>
```

### 卫星地图

```
const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
  crs:'baidu' //百度地图必须配置此项
})
const key = ref("your tmap token")
<LeafletMap :tk="key" :option="mapoption" style="width: 500px; height: 500px">
<BdSatellite/>
</LeafletMap>
```

## marker

```
const position = reactive({
    lat:'',
    lng:''
})

const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap  :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
<Lmarker :position="position"></Lmarker>
</LeafletMap>
```

## polyline

```
const latlngs = ref([
  [31.45, 120.99],
  [31.27, 121.13],
  [31.48, 121.914],
])

const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap  :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
<Lpolyline :latlngs="latlngs"></Lpolyline>
</LeafletMap>
```

## polygon

```
const latlngs = ref([
  [31.45, 120.99],
  [31.27, 121.13],
  [31.48, 121.914],
])

const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap  :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
<Lpolygon :latlngs="latlngs"></Lpolygon>
</LeafletMap>
```

## layerGroup&feturegroup

```

const mapoption = ref({
  center: [31.41, 120.98],
  zoom: 13,
})
<LeafletMap  :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
<Lgroup>
    <Lmarker/>
    <Lpolyline />
    <Lpolyline/>
</Lgroup>
<Fgroup>
    <Lmarker/>
    <Lpolyline />
    <Lpolyline/>
</Fgroup>
</LeafletMap>
```

## 获取地图实例

```
const mapref = ref()
const markerref = ref()
mapref.value.$$instance
markerref.value.$$instance
...

<LeafletMap ref="mapref"  :option="mapoption" style="width: 500px; height: 500px">
<GdNormal/>
<Lgroup>
    <Lmarker ref="markerref"/>
    <Lpolyline />
    <Lpolyline/>
</Lgroup>
<Fgroup>
    <Lmarker/>
    <Lpolyline />
    <Lpolyline/>
</Fgroup>
</LeafletMap>
```

## 事件

"click", "dblclick", "mouseover", "mouseout"
