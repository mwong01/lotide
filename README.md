# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mwong01/lotide`

**Require it:**

`const _ = require('@mwong01/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: returns true if arrays are equal
* `assertEqual`: returns true if primitive objects are equal
* `assertObjectsEqual`: returns true if objects are equal
* `countLetters`: given a string of letters, returns cooresponding number of occurances
* `countOnly`: given an object with list of items, returns cooresponding number of occurances
* `eqArrays`: determine if two arrays are the same
* `eqObjects`: determine if two objects are the same
* `findKey`: identifies the key given an object and callback function
* `findKeyByValue`: given an object and callback function, identifies key name
* `flatten`: merge arrays of arrays into one array
* `head`: returns first item in an array
* `letterPositions`: identifies position of letter within a sentence
* `map`: takes array and callback that will return the modified array with callback function applied
* `middle`: returns middle element(s) of an array
* `tail`: returns new array with the first index element removed from original array
* `takeUntil`: takes array and callback that will retrun all elements that match until the one that does not match
* `without`: takes an array and value of an array, which returns a new array with those array elements removed
