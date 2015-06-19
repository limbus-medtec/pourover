/**
 * insertSort - insert elements into Array
 *
 * @param  {Array} set     current Array
 * @param  {Array} element elements to be added
 * @return {Array}         result
 */
var insertSort = function(set, element) {
  var length = set.length,
    lastElem = set[length - 1],
    i = 0;
  if (element > lastElem) {
    set.push(element);
    return set;
  }
  while (i < length) {
    if (element < set[i]) {
      return set.slice(0, i).concat([element]).concat(set.slice(i, length));
    } else {
      i++;
    }
  }
  set.push(element);
  return set;
};

module.exports = insertSort;
