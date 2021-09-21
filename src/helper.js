/** Return an array containing two arrays:
 * arr containing num elements from original array 
 * arr containing remaining elements
 */

function choose(arr, num) {
  const arrCopy = [...arr];
  const newArr = [];

  for (let i=0; i< num; i++) {
    const ind = Math.floor(Math.random() * arrCopy.length);
    newArr.push(arrCopy[ind]);
    arrCopy.splice(ind, 1);
  }

  return [newArr, arrCopy];
}

/** Return total from an array given a key that contains values
 */

function total(arr, key) {
  return arr.reduce((accum, ele) => {
    return accum + ele[key];
  }, 0);
}

export {choose, total};