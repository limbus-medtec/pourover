import {unionSort} from "sort/union.js";
import {insertSort} from "sort/insert.js";
import {subtractSort} from "sort/subtract.js";
import {removeSort} from "sort/remove.js";
import {permuteFromArray, buildPermutationArray} from "sort/permute.js";

/**
 * PourOver - This is where all of PourOver's modules are attached to itself.
 *
 * @todo
 * Copy moment.js import
 * add esnext option to jshint
 */

var PourOver = {
  unionSort: unionSort(a, b),
  insertSort: insertSort(a, b),
  subtractSort: subtractSort(a, b),
  removeSort: removeSort(a, b),
  buildPermutationArray: buildPermutationArray(a, b),
  permuteFromArray: permuteFromArray(a, b),
};
