export const alphabetizeArray = (list) => {
  list.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0
  })
  return list
}

export const alphabetizeArrayOfObject = (list, key) => {
  list.sort(function(a, b){
    if(a[key] < b[key]) { return -1; }
    if(a[key] > b[key]) { return 1; }
    return 0
  })
  return list
}