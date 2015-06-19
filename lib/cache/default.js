// ### Default: the dumb caches.
// Just goes through each possible value for the filter and tests every item in the collection against it. As expensive as
// possibile, but simple.


/**
 * defaultCache - description
 *
 * @param {Array} items -
 *
 */
var defaultCache = function(items) {

  _.each(this.possibilities, function(p) {
    var matching_items = _.filter(items, function(i) {
        return this.fn(p, i);
      }),
      matching_cids = _.pluck(matching_items, 'cid');
    p.matching_cids = matching_cids;
  });
};

/**
 * defaultAddCache - description
 *
 * @param {Array} items -
 */
var defaultAddCache = function(items) {
  _.each(this.possibilities, function(p) {
    var matching_items = _.filter(items, function(i) {
        return this.fn(p, i);
      }),
      matching_cids = _.pluck(matching_items, 'cid');
    p.matching_cids = PourOver.union_sorted(p.matching_cids, matching_cids);
  });
};

export { defaultCache, deafultAddCache };
