// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.concat
description: >
  TypeError is thrown if "length" of result array exceeds 2^53 - 1.
info: |
  Array.prototype.concat ( ...arguments )

  [...]
  5. Repeat, while items is not empty
    [...]
    c. If spreadable is true, then
      [...]
      ii. Let len be ? LengthOfArrayLike(E).
      iii. If n + len > 2^53 - 1, throw a TypeError exception.
    [...]

  CreateDataPropertyOrThrow ( O, P, V )

  [...]
  3. Let success be ? CreateDataProperty(O, P, V).
  4. If success is false, throw a TypeError exception.
features: [Symbol.isConcatSpreadable, Proxy]
---*/

var spreadable = {};
spreadable.length = Number.MAX_SAFE_INTEGER;
spreadable[Symbol.isConcatSpreadable] = true;

assert.throws(TypeError, function() {
  [1].concat(spreadable);
});

var proxy = new Proxy([], {
  get: function(_target, key) {
    if (key === "length") {
      return Number.MAX_SAFE_INTEGER;
    }
  },
});

assert.throws(TypeError, function() {
  [].concat(1, proxy);
});