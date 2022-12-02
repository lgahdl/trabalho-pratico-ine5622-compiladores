export function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
}

export function splitArrayOnIndexes(array, indexes) {
  const result = []
  for (let i = 0; i <= indexes.length; i++) {
    if (i === 0) {
      result[i] = array.slice(0, indexes[0] + 1);
      continue;
    } else if (i === indexes.length) {
      result[i] = array.slice(indexes[i-1]+1)
      continue;
    } else {
      result[i] = array.slice(indexes[i - 1]+1, indexes[i]+1)
    }
  }
  return result
}