
// ### Exact: the fastest caches.
// For filters that evaluate by strict equality (this property === this value). The name of the filter must
// match the name of the property for exact cache to work.

/**
 * exactCache
 * @param {Array} items -
 */
var exactCache = function(items) {
  var that = this,
    attr = this.attr || this.name;
  _.each(items, function(i) {
    var p = this.possibilities[i[attr]];
    if (p) {
      p.matching_cids = insertSort(p.matching_cids, i.cid);
    }
  });
};


/**
 * exactAddCache -
 *
 * @param {Array} items -
 */
var exactAddCache = function(items) {
  exactCache.call(this, items);
};

export { exactCache, exactAddCache };
