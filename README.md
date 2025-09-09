1. What is the difference between var, let, and const?
   Ans : var is function-scoped and reassignable, let is block-scoped and reassignable, const is block-scoped and non-reassignable .

2.What is the difference between map(), forEach(), and filter()?
  Ans : map(): Transforms each element and returns a new array of the same length with the transformed values. Use for creating a new array based on computations.
        forEach(): Executes a callback for each element but returns undefined. Use for side effects  without needing a return value.
        filter(): Tests each element with a callback  and returns a new array with only the elements that pass the test. Use for selecting a subset of the array.


3.What are arrow functions in ES6?
Ans : Arrow functions in ES6 are concise function expressions using => syntax, with lexical this binding and implicit returns for single expressions. 
They lack their own arguments object and cannot be used as constructors. Ideal for callbacks and preserving this context.

4.How does destructuring assignment work in ES6?
Ans : In ES6, destructuring assignment lets you unpack values from arrays or properties from objects directly into variables in a concise way.
For arrays, it matches by position, and for objects, it matches by property name.
It also supports defaults, renaming, nested structures, and works well with function parameters.

5.Explain template literals in ES6. How are they different from string concatenation?

Ans : In ES6, template literals use backticks (`) and ${} to embed variables or expressions directly inside strings, and they also support multiline text.
