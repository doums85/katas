# JavaScript Katas

## Katas

### Fundamental

- [hello-you](./src/fundamental/hello-you/hello-you.js)
- [fizz-buzz](./src/fundamental/fizz-buzz/fizz-buzz.js)
- [sum-of-multiples](./src/fundamental/sum-of-multiples/sum-of-multiples.js)
- [math-min](./src/fundamental/math-min/math-min.js)
- [math-pow](./src/fundamental/math-pow/math-pow.js)

### Array

- [social-like](./src/array/social-like/social-like.js)
- [found-min](./src/array/found-min/found-min.js)
- [sum-of-odds](./src/array/sum-of-odds/sum-of-odds.js)
- [inverse-values](./src/array/inverse-values/inverse-values.js)

### String

- [count-letters](./src/string/count-letters/count-letters.js)
- [palindrome](./src/string/palindrome/palindrome.js)
- [duration](./src/string/duration/duration.js)
- [abbreviate-names](./src/string/abbreviate-names/abbreviate-names.js)
- [string-compare](./src/string/string-compare/string-compare.js)

### Array functions

- [only-odds](./src/array-functions/only-odds/only-odds.js)
- [pascal-case](./src/array-functions/pascal-case/pascal-case.js)
- [censorship](./src/array-functions/censorship/censorship.js)
- [uniq](./src/array-functions/uniq/uniq.js)

### Object

- [person](./src/object/person/person.js)
- [shape](./src/object/shape/shape.js)

### 2. Configure this repo

**Prerequisites**: you must have installed Node

Install the needed libraries:

```sh
npm install
```

## Testing

### 1. Fundamental katas

Fundamental katas use the Node Assert testing library: https://nodejs.org/api/assert.html

```sh
node src/fundamental/kata-name/kata-name.js
```

### 2. Other katas

The other katas use the Jest testing framework: https://jestjs.io/docs/getting-started

```sh
npm test -- kata-name

Example: npm test -- npm found-min
```