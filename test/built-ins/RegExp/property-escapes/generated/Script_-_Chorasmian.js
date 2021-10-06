// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Chorasmian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010FB0, 0x010FCB]
  ]
});
testPropertyEscapes(
  /^\p{Script=Chorasmian}+$/u,
  matchSymbols,
  "\\p{Script=Chorasmian}"
);
testPropertyEscapes(
  /^\p{Script=Chrs}+$/u,
  matchSymbols,
  "\\p{Script=Chrs}"
);
testPropertyEscapes(
  /^\p{sc=Chorasmian}+$/u,
  matchSymbols,
  "\\p{sc=Chorasmian}"
);
testPropertyEscapes(
  /^\p{sc=Chrs}+$/u,
  matchSymbols,
  "\\p{sc=Chrs}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010FAF],
    [0x010FCC, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Chorasmian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Chorasmian}"
);
testPropertyEscapes(
  /^\P{Script=Chrs}+$/u,
  nonMatchSymbols,
  "\\P{Script=Chrs}"
);
testPropertyEscapes(
  /^\P{sc=Chorasmian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Chorasmian}"
);
testPropertyEscapes(
  /^\P{sc=Chrs}+$/u,
  nonMatchSymbols,
  "\\P{sc=Chrs}"
);
