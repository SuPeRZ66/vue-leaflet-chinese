import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/plugin/index.js"),
      name: "vue-leaflet-chinese",
      fileName: "vue-leaflet-chinese",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "leaflet", "proj4leaflet"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          leaflet: "L",
          proj4leaflet: "L.Proj",
        },
      },
    },
  },
})
