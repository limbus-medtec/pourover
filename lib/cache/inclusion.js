
/**
 * inclusionCache - description
 *
 * @param  {type} items description
 * @return {type}       description
 */
var inclusionCache = function(items) {

  var attr = this.attr || this.name;
  _.each(items, function(i) {
    _.each(i[attr], function(v) {
      var p = this.possibilities[v];
      if (p) {
        p.matching_cids = insertSort(p.matching_cids, i.cid);
      }
    });
  });
};


/**
 * inclusionAddCache - description
 *
 * @param  {type} items description
 * @return {type}       description
 */
var inclusionAddCache = function(items) {
  inclusionCache.call(this, items);
};

export { inclusionCache, inclusionAddCache };
