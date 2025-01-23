---
title: 'JavaScript Classics: apply()' 
date: 2025-01-18T00:00:00-0500
excerpt: Why use apply() in 2025?
---

If you are a newer JavaScript developer, you may not have used the [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) method. It's a method on `Function` instances that allows you to call a function with a given `this` value and `arguments` provided as an array (or an array-like object). [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) is similar, but it supplies the arguments individually as a list.

Why would you want or need to do this?

## Passing an array to a function such as `Math.max()` or `Math.min()`

It used to be common to use `apply()` to pass an array of numbers to `Math.max()` or `Math.min()` to find the maximum or minimum value in the array.

`Math.max()` and `Math.min()` accept a variable number of arguments, but not as an array. So, we can use `apply()` to pass the array as arguments, and pass `null` as the `this` value (since these functions don't use `this`).

```javascript
const numbers = [7, 3, 9, 2, 5];
const max = Math.max.apply(null, numbers);
console.log(max); // 9
```

Pretty neat, huh? But, even this use case is unnecessary in modern JavaScript, since we can use the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to pass the array as arguments.

```javascript
const numbers = [7, 3, 9, 2, 5];
const max = Math.max(...numbers);
console.log(max); // 9
```

That is more readable!

## Using 'generic' `Array` methods on array-like objects

Now, here's another use of `apply()` that is still relevant today.

Use can use `apply()` to reuse 'generic' `Array` methods on array-list objects. For example, the `Array.prototype.join()` method has the following note in [its documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join):

> The join() method is generic. It only expects the this value to have a length property and integer-keyed properties.

```javascript
const arrayLikeObject = {
  // integer-keyed properties
  0: 'foo',
  1: 'bar',
  2: 'baz',
  // length property
  length: 3
};

console.log(
  Array.prototype.join.call(arrayLikeObject, ', ')
); // "foo, bar, baz"

console.log(
  Array.prototype.map.call(arrayLikeObject, item => item.toUpperCase())
); // ["FOO", "BAR", "BAZ"]
```

Now, I question whether this is a good practice, as it can be confusing, and it depends on implementation details of `Array` instance methods. I'd argue it is better to use [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) to explicitly convert the array-like object to an array first, and then use the `Array` methods directly.

```javascript
const arrayLikeObject = {
  0: 'foo',
  1: 'bar',
  2: 'baz',
  length: 3
};

const arr = Array.from(arrayLikeObject);

console.log(
  arr.join(', ')
); // "foo, bar, baz"

console.log(
  arr.map(item => item.toUpperCase())
); // ["FOO", "BAR", "BAZ"]
```
