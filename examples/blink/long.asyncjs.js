/*
 * examples/blink/long.asyncjs.js
 */

'use strict';

var udoo = require('../..');

var led = udoo.outputPin(13);

function loop(cb) {
  udoo.async.series([
    function (cb) {
      led.setHigh(cb);
    },
    function (cb) {
      setTimeout(cb, 1000);
    },
    function (cb) {
      led.setLow(cb);
    },
    function (cb) {
      setTimeout(cb, 1000);
    }
  ], cb);
}

udoo.async.series([
  udoo.reset,
  function (cb) {
    udoo.async.forever(loop, cb);
  }
], function (err) {
  throw err;
});
