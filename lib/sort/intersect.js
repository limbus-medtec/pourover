/**
 * intersectSorted - description
 *
 * @param  {type} a description
 * @param  {type} b description
 * @return {type}   description
 */
var intersectSort = function(a, b) {
  var lowA = 0,
    lowB = 0,
    highA = a.length,
    highB = b.length,
    result = [],
    la, lb;

  while (highA > lowA && highB > lowB) {
    la = a[lowA];
    lb = b[lowB];
    if (la == lb) {
      result.push(la);
      lowA++;
      lowB++;
    } else if (la < lb) {
      lowA++;
    } else {
      lowB++;
    }
  }
  return result;
};

export { intersectSort };
