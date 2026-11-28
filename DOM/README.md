# JavaScript DOM & BOM

My hand-coded practice for the DOM section of my full-stack journey: making a web page interactive with JavaScript. I wrote, ran and debugged every example myself while learning the concept, not copied.

## Files

| File | What's in it |
|------|--------------|
| `index.html` / `script.js` | Early practice: `window` as the global object, the BOM (`screen`, `navigator`, `location`), selecting elements, and a first colour toggle |
| `dom.html` / `scripts.js` | Ten hands-on examples, one per concept (below) |

## The ten examples

| # | Concept |
|---|---------|
| 1 | Accessing elements and changing text (`querySelector`, `textContent`) |
| 2 | Traversing the DOM (`firstElementChild`) and styling with `classList.add` |
| 3 | Manipulating a nested element's content and style |
| 4 | Creating and inserting elements (`createElement`, `appendChild`) |
| 5 | Removing elements (`lastElementChild.remove()`) |
| 6 | Event handling (`dblclick`, and passing a callback instead of calling it) |
| 7 | Event delegation (one listener on the parent, `e.target`, `.matches()`) |
| 8 | Form handling (`submit`, `e.preventDefault()`, `input.value`) |
| 9 | `DOMContentLoaded` (a document-level event) |
| 10 | Toggling a class (`classList.toggle`) |

## Key things I locked down

- **The DOM is how JavaScript makes a page interactive, mostly through events** — select an element, listen for an event, then run the logic.
- **Event delegation** — one listener on a parent handles every child, including ones added later, because the event bubbles up and `e.target` tells you which child was clicked. The clean way to handle a dynamic list.
- **A script that touches the DOM needs `defer`** (or to sit at the end of `<body>`), otherwise it runs before the elements exist and reads `null`.
- **`#` and `.` belong in the selector, not in the HTML `id`/`class` attribute** — and an `id` must be unique on the page and start with a letter.
- **Styling belongs in a CSS class, toggled from JS with `classList`** — not hard-coded inline from JavaScript.
- **`e.preventDefault()`** stops a form from reloading the page so the input can be handled in JS; a form field's text comes from `.value`, not `.textContent`.
- **The event target matters** — `click`/`submit` fire on an element, but `DOMContentLoaded` fires on the `document`.

## About

Computer Science student learning full-stack web development. I come from a C++ and Python background, so I learn new concepts by connecting them to what I already know, then hand-code everything from scratch to make it stick.
