/**
 * bisectBy -
 *
 *
 */
var bisectBy = function(fn) {
  // Thanks to crossfilter (https://github.com/square/crossfilter) for this implementation.
  function bisectLeft(a, x, lo, hi) {
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (fn(a[mid]) < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function bisectRight(a, x, lo, hi) {
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (x < fn(a[mid])) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  bisectRight.right = bisectRight;
  bisectRight.left = bisectLeft;
  return bisectRight;
};

export { bisectBy };
