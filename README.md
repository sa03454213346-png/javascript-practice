# JavaScript Practice

My hand-coded JavaScript from the foundations phase of my full-stack web development journey. Every file here I wrote and ran myself while learning the concept, not copied. The goal is real understanding, not just finishing videos.

## What's inside

| File | Topic |
|------|-------|
| `01-hello.js` | First JS program and how JavaScript runs (engine, Node) |
| `02-printing.js` | Printing methods — `console.log`, `console.table`, `process.stdout.write` |
| `03-datatypes.js` | Data types — the 7 primitives plus objects and arrays |
| `04-alloperators.js` | Operators and their precedence |
| `05-primitives.js` | Primitives and immutability (value stored in the stack) |
| `06-nonprimitives.js` | Objects and arrays — references, call by value vs call by reference, stack vs heap |
| `07-conditions.js` | `if` / `else` / `else if`, `typeof` checks, truthy and falsy |
| `08-arraysmethods.js` | `push`, `pop`, `shift`, `unshift`, `concat`, `slice`, spread, `includes`, soft vs hard copy |
| `09-loopchallenges.js` | `while`, `do-while`, `for`, `for-of`, `for-in`, `forEach`, and `break` vs `continue` |
| `10-loopsmore.js` | More loop practice |
| `11-functions.js` | Functions — declarations, nested functions, arrow functions, callbacks, closures |
| `12-functions-p.js` | Functions practice — callbacks and closures with my own examples |

## Key things I locked down

- **Call by value vs call by reference** — primitives copy their value, objects and arrays copy the address, so two variables can point to the same object in the heap.
- **`const` vs `Object.freeze()`** — `const` only locks the address, `Object.freeze()` locks the contents.
- **The forEach gotcha** — you cannot `break` out of a `forEach`; `return` only skips the current item like `continue`. Use a real `for` / `for-of` loop when you need to stop early.
- **Callbacks** — passing a function as an argument to another function. `hello` hands over the function, `hello()` runs it. The receiving function decides when and how to call it.
- **Closures** — a function that remembers the variables from the function it was created in, even after that outer function has finished. It carries them along like a backpack.

## About

Computer Science student learning full-stack web development (HTML, CSS, Tailwind, JavaScript, and more on the way). I hand-code everything to build genuine fundamentals.
