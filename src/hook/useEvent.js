export const useEvent = ($instance = null, emits) => {
  const getdata = (e) => {
    if (e.target.customdata !== undefined) {
      return e.target.customdata
    }
    if (e.layer.customdata !== undefined) {
      return e.layer.customdata
    }
    return null
  }
  $instance.on("click", function (e) {
    emits("click", e, e.target.customdata)
  })

  $instance.on("dblclick", function (e) {
    emits("dblclick", e, e.target.customdata)
  })
  $instance.on("mouseover", function (e) {
    emits("mouseover", e, e.target.customdata)
  })
  $instance.on("mouseout", function (e) {
    emits("mouseout", e, e.target.customdata)
  })
}
