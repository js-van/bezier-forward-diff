var test = require('tape');
var bezier = require('./bezier');
var vec3 = require('gl-vec3');
var zeroes = require('zeroes');

var input = [ [ 0, 0, 0 ],
              [ 0, 0, 1 ],
              [ 0, 1, 1 ],
              [ 1, 1, 1 ] ];

test('simple case with four points, 8 segments', function (t) {
  var result = zeroes( [ 8 + 1, 3 ] ); // n + 1 points define n segments
  bezier(result, input, 8);

  var expected = [ [ 0, 0, 0 ],
                   [ 0.001953125, 0.04296875, 0.330078125 ],
                   [ 0.015625, 0.15625, 0.578125 ],
                   [ 0.052734375, 0.31640625, 0.755859375 ],
                   [ 0.125, 0.5, 0.875 ],
                   [ 0.244140625, 0.68359375, 0.947265625 ],
                   [ 0.421875, 0.84375, 0.984375 ],
                   [ 0.669921875, 0.95703125, 0.998046875 ],
                   [ 1, 1, 1 ] ];

  t.deepEqual(result, expected);
  t.end();
});

test('simple case with four points, 12 segments', function (t) {
  var result = zeroes( [ 12 + 1, 3 ] ); // n + 1 points define n segments

  bezier(result, input, 12);

  var expected = [ [ 0, 0, 0 ],
                   [ 0.0005787037037037037, 0.019675925925925923, 0.22974537037037038 ],
                   [ 0.004629629629629629, 0.07407407407407407, 0.4212962962962963 ],
                   [ 0.015625, 0.15625, 0.578125 ],
                   [ 0.037037037037037035, 0.2592592592592593, 0.7037037037037037 ],
                   [ 0.07233796296296297, 0.37615740740740744, 0.8015046296296297 ],
                   [ 0.125, 0.5, 0.875 ],
                   [ 0.19849537037037038, 0.6238425925925926, 0.9276620370370371 ],
                   [ 0.2962962962962963, 0.7407407407407407, 0.962962962962963 ],
                   [ 0.421875, 0.84375, 0.9843750000000001 ],
                   [ 0.5787037037037037, 0.9259259259259259, 0.9953703703703706 ],
                   [ 0.7702546296296297, 0.9803240740740741, 0.9994212962962966 ],
                   [ 1, 1, 1 ] ];

  t.deepEqual(result, expected);
  t.end();
});

test('simple case on 2D plane z = 0', function (t) {
  var input2d = [ [ 0, 0, 0 ],
                  [ 0, 1, 0 ],
                  [ 1, 1, 0 ],
                  [ 1, 0, 0 ] ];

  var result = zeroes( [ 8 + 1, 3 ] ); // n + 1 points define n segments
  bezier(result, input2d, 8);

  var expected = [ [ 0, 0, 0 ],
                   [ 0.04296875, 0.328125, 0 ],
                   [ 0.15625, 0.5625, 0 ],
                   [ 0.31640625, 0.703125, 0 ],
                   [ 0.5, 0.75, 0 ],
                   [ 0.68359375, 0.703125, 0 ],
                   [ 0.84375, 0.5625, 0 ],
                   [ 0.95703125, 0.328125, 0 ],
                   [ 1, 0, 0 ] ];

  t.deepEqual(result, expected);
  t.end();
})

test('simple case on 2D plane z = 1', function (t) {
  var input2d = [ [ 0, 0, 1 ],
                  [ 0, 1, 1 ],
                  [ 1, 1, 1 ],
                  [ 1, 0, 1 ] ];

  var result = zeroes( [ 8 + 1, 3 ] ); // n + 1 points define n segments
  bezier(result, input2d, 8);

  var expected = [ [ 0, 0, 1 ],
                   [ 0.04296875, 0.328125, 1 ],
                   [ 0.15625, 0.5625, 1 ],
                   [ 0.31640625, 0.703125, 1 ],
                   [ 0.5, 0.75, 1 ],
                   [ 0.68359375, 0.703125, 1 ],
                   [ 0.84375, 0.5625, 1 ],
                   [ 0.95703125, 0.328125, 1 ],
                   [ 1, 0, 1 ] ];

  t.deepEqual(result, expected);
  t.end();
})
