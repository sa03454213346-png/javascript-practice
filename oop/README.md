# JavaScript OOP

My hand-coded JavaScript object-oriented programming practice, from the OOP section of my full-stack journey. I wrote and ran every file myself while learning the concept, not copied.

| File | Topic |
|------|-------|
| `01-prototypes.js` | Prototypes — borrowing another object's properties/methods via `Object.setPrototypeOf`, and the prototype chain |
| `02-constructor.js` | Functional constructors with `new` and `this`, shared methods on `Constructor.prototype`, and `new.target` to enforce `new` |
| `03-master.js` | `class`, inheritance with `extends` / `super`, and method overriding (polymorphism) |
| `04-encapsulation.js` | Encapsulation — private `#` fields with getters/setters and validation |

## Key things I locked down

- **`class` is syntactic sugar** over constructor functions and prototypes — under the hood JavaScript still wires everything through prototypes and the prototype chain.
- **Methods belong on the prototype, not inside the constructor** — on the prototype there is one shared copy for every object; inside the constructor each object gets its own copy (wasteful).
- **`super()` before `this`** in a derived class constructor — the parent has to set up its part first (same idea as a C++ base-class initializer list).
- **Encapsulation** — a private `#` field plus a getter/setter is the controlled door to that data, with validation inside the setter.

## About

Computer Science student learning full-stack web development. I come from a C++ and Python background, so I learn new concepts by connecting them to what I already know, then hand-code everything from scratch to make it stick.
