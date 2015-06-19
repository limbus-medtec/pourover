/**
 * subtractSort - Subtract items in second Array from first Array
 *
 * @param  {Array} a Array to be subtracted from
 * @param  {Array} b Array of items to subtract
 * @return {Array}   result
 */
var subtractSort = function(a, b) {
  var lowA = 0,
    lowB = 0,
    highA = a.length,
    highB = b.length,
    result = [],
    la, lb;
  while (highA > lowA || highB > lowB) {
    la = a[lowA];
    lb = b[lowB];
    
    if (highA == lowA) return result;
    if (highB == lowB) return result.concat(a.slice(lowA, highA));
    if (la == lb) {
      lowA++;
      lowB++;
    } else if (la < lb) {
      result.push(la);
      lowA++;
    } else {
      lowB++;
    }
  }
  return result;
};

module.exports = subtractSort;
