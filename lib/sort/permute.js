// Use a permutation array to resort a subset of a collection.

/**
 * permuteFromArray - description
 *
 * @param   {Array} collection
 * @param   {Array} permutation
 * @return  {Array}
 */
var permuteFromArray = function(collection, perm) {
  var output = [];
  if (typeof(collection[0]) === "number") {
    _.each(collection, function(i) {
      output[perm[i]] = i;
    });
  } else {
    _.each(collection, function(i) {
      output[perm[i.cid]] = i;
    });
  }
  return _.without(output, undefined);
};

/**
 * buildPermutationArray - build a permutation Array
 *
 * @param  {Array}    set   Array to be sorted
 * @param  {Function} sort  Function used for sorting
 * @return {Array}          result
 */
var buildPermutationArray = function(set, sort) {
  var sortedSet = _.clone(set),
    perm = [];
  if (typeof(sort) === "function") {
    sortedSet.sort(sort);
  } else {
    sortedSet.sort(function(a, b) {
      return sort.fn.call(sort, a, b);
    });
  }
  _.each(sortedSet, function(m, i) {
    perm[m.cid] = i;
  });
  return perm;
};

export *;
