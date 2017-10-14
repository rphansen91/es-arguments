# ES Arguments

[![Travis Build](https://img.shields.io/travis/rphansen91/es-arguments.svg?style=flat-square)](https://travis-ci.org/rphansen91/es-arguments)
[![Codecov](https://img.shields.io/codecov/c/github/rphansen91/es-arguments.svg?style=flat-square)](https://codecov.io/gh/rphansen91/es-arguments)
[![npm](https://img.shields.io/npm/v/es-arguments.svg?style=flat-square)](https://www.npmjs.com/package/es-arguments)
[![downloads](https://img.shields.io/npm/dw/es-arguments.svg?style=flat-square)](https://www.npmjs.com/package/es-arguments)

## Description

Get the argument names of any es method.

## Usage

`npm install es-arguments`

```js
const getArguments = require('es-arguments')

getArguments(function (arg1, arg2) {}) // ['arg1', 'arg2']
getArguments(function (arg1=1, arg2=2) {}) // ['arg1', 'arg2']
getArguments(function ({ arg1, arg2 }) {}) // ['{ arg1, arg2 }']
getArguments(function (args = { arg1, arg2 }) {}) // ['args']
getArguments((arg1, arg2) => {}) // ['arg1', 'arg2']
```
