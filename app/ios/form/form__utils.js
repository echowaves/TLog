export function findById(items = [], id, idResolver = (i) => i.id ){
  for(var i=0; i < items.length; i++) {
    if (idResolver(items[i]) == id) return items[i]
  }
return null
}
