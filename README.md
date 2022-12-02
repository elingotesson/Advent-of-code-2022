# advent-of-code-2022-typescript
Advent of Code 2022 implementation using TypeScript and Test Driven Development

## How to use it

`yarn && yarn test` or `npm i && npm t`.

## How to focus on a single test at a time for easier TDD

```diff
- test('some test', ...
+ test.only('some test', ...
```

or

```diff
- describe('some test', ...
+ describe.only('some test', ...
```
