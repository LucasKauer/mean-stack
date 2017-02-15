# MEAN Stack

Get start with MEAN Stack.

# Topics to Review

- RESTFul
- Node.js
- Express
- Angular
- MongoDB
- Gulp
- Grunt
- Bower

#### JavaScript's single Thread
JavaScript isn't executed while the page is rederering (layout and paint). The page execute one at a time.

#### Equality JavaScript ([Quote from: You Don't Know JS])
> You should take special note of the `==` and `===` comparison rules if you're comparing two non-primitive values, like objects (including function and array). Because those values are actually held by reference, both `==` and `===` comparisons will simply check whether the references match, not anything about the underlying values.
For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. You might think that two arrays with the same contents would be `==` equal, but they're not:

When the input is:
```js
[1,2,3] == [1,2,3];
```
The output will be ` false`. When the input is:
```js
[1,2,3] == "1,2,3";
```
The output will be `true`.

#### Hoisting

Read: [You Don't Know JS: Hoisting]

#### Closure

Read: [You Don't Know JS: Closure]

#### What's promise?

At its core, a Promise represents the result of a task, which may or may not have completed. The only interface requirement of a Promise is having a function called then, which can be given callbacks to be called when the promise is fulfilled or has failed.

With promises, the order of the callbacks is respected. We're guaranteed to have our done callback called first, then our fail callback, and finally our always callback.

##### Example:

Callback example without promisse:
```js
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    });
}
```
The output will be: `10`, `10`, `10`, `10`, `10`, `10`, `10`, `10`, `10`, `10`.

Callback example with promisse:
``` js
for (var i = 0; i < 10; i++) {
    new Promise((resolve) => {
            resolve(i);
    }).then((number) => {
        setTimeout(() => {
            console.log(number);
        });
    });

```
The output will be: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`.

#### What's node?

Node isn’t a server, node is a JavaScript runtime.

[Quote from: You Don't Know JS]: <https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#equality>

[You Don't Know JS: Hoisting]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#hoisting

[You Don't Know JS: Closure]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#closure