const getArguments = require('./arguments')

describe('Function argument names', () => {
  [
    [1, []],
    ['string', []],
    [true, []],
    [function () {}, []],
    [function (arg1, arg2) {}, ['arg1', 'arg2']],
    [function name () {}, []],
    [function name (arg1, arg2) {}, ['arg1', 'arg2']],
    [function name (arg1=1, arg2=2) {}, ['arg1', 'arg2']],
    [function name (arg1 /* First argument */, arg2 /* Second argument */) {}, ['arg1', 'arg2']],
    [function name (args = { arg1, arg2 }) {}, ['args']],
    [function name ({ arg1, arg2 }) {}, ['{ arg1, arg2 }']],
    [(arg1, arg2) => {}, ['arg1', 'arg2']],
    [({ arg1, arg2 }) => {}, ['{ arg1, arg2 }']],
    [(args = { arg1, arg2 }) => {}, ['args']],
    [arg1 => {}, ['arg1']],
  ].map(t => test(t[0].toString(), () => {
    expect(getArguments(t[0])).toEqual(t[1])
  }))
})
