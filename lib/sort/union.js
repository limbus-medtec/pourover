/**
 * unionSort - Unions and sorts a and b
 *
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array}   result
 * @todo Make more efficient by just copying at Infinity
 */
var unionSort = function(a, b) {
  var lowA = 0,
    lowB = 0,
    highA = a.length,
    highB = b.length,
    result = [],
    la, lb;
  while (highA > lowA || highB > lowB) {
    la = a[lowA];
    lb = b[lowB];

    if (la === void 0) la = Infinity;
    if (lb === void 0) lb = Infinity;
    if (lowA == highA) return result.concat(b.slice(lowB, highB));
    if (lowB == highB) return result.concat(a.slice(lowA, highA));
    if (la == lb) {
      result.push(la);
      lowA++;
      lowB++;
    } else if (la < lb) {
      result.push(la);
      lowA++;
    } else {
      result.push(lb);
      lowB++;
    }
  }
  return result;
};

export unionSort;
