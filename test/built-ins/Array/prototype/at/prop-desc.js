// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.at
description: >
  Property type and descriptor.
info: |
  Array.prototype.at( index )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Array.prototype.at]
---*/
assert.sameValue(typeof Array.prototype.at, 'function');

assert.sameValue(
  typeof Array.prototype.at,
  'function',
  'The value of `typeof Array.prototype.at` is "function"'
);

verifyProperty(Array.prototype, 'at', {
  configurable: true,
  enumerable: false,
  writable: true
});
