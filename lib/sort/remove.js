/**
 * removeSorted - description
 *
 * @param  {Array} set     description
 * @param  {Array} element description
 * @return {Array}         description
 */
var removeSorted = function(set, element) {
  var length = set.length,
    i = 0;
  while (i < length) {
    if (element == set[i]) {
      return set.slice(0, i).concat(set.slice(i + 1, length));
    } else {
      i++;
    }
  }
  return set;
}

modules.export = removeSort;
