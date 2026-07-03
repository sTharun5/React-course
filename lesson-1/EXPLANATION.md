# Lesson 1 — What this lesson teaches

Overview
- Lesson-1 introduces React basics and shows how to use small React examples without a build step.
- Topics covered: what React/JSX is, how to load external libraries from CDNs, how to embed JavaScript expressions in JSX, and small practice examples that run in the browser.
- These examples use CDN-hosted React, ReactDOM, and Babel so students can open the HTML files directly in their browser without a build tool.

How to run the examples
- No build step required. Open each `.html` file in a modern browser.
- The pages load React/ReactDOM/Babel from a CDN and use `type="text/babel"` so JSX is transpiled in the browser (for learning only).
- For production or larger projects, move to a bundler (Vite, CRA, etc.) and avoid using Babel in the browser.

Files in this lesson

- p1-sol.html
  - Purpose: Very first example showing a JSX button rendered into the DOM.
  - Key lines:
    - Selects `.container` and renders a small JSX tree with a `<button>`.
    - Uses `ReactDOM.createRoot(container).render(div)`.
  - Learning points: how to render JSX via `createRoot`.

- p2-sol.html
  - Purpose: Show embedding a JS variable in JSX.
  - Key lines: `const name = "Tharun";` and `<p> hello , {name} </p>`
  - Learning points: use `{}` to embed JS expressions and variables in JSX.

- p3-sol.html
  - Purpose: Render product data using variables.
  - Key lines: `let price = 10; let product = "cotton socks";` and use `{product}` / `{price}` inside JSX.
  - Learning points: multiple variables in JSX and rendering simple product UI.

- p4-sol.html (react-basics.html)
  - Purpose: Show JS arithmetic and rendering computed values.
  - Key lines: `const productCost = 10 + 8 * 2; const shippingCost = 5;`
  - Important note: avoid literal `${productCost}` inside JSX — that is a template placeholder inside a string. To show a dollar sign with the value, use:
    - `<p>{"$" + productCost}</p>` or `<p>{`Product cost: $${productCost}`}</p>` or render the number and a `$` separately.
  - Learning points: compute values and display results; how to format values for display.

- p5-sol.html
  - Purpose: Use dayjs (a date library) to format and display a date.
  - Key lines: `const str = dayjs().format('MMMM D')` and render `<h1>{str}</h1>`
  - Learning points: loading and using an external library from CDN and rendering its result in React.

- p6-sol.html
  - Purpose: Live clock example that updates every second.
  - Key lines:
    - `const root = ReactDOM.createRoot(container);` (create root once)
    - `setInterval(() => { root.render(div) }, 1000);`
  - Important practice: create the root once and reuse it for subsequent renders — do not call `createRoot` repeatedly.
  - Learning points: updating UI over time, re-rendering with ReactDOM.

- practise-1.txt
  - Contains the exercise prompts that the pages solve (button, name paragraph, product card).

Teaching tips
- Emphasize the JSX expression syntax: always use `{...}` to insert JS values.
- Point out the difference between strings and JS template interpolation inside JSX.
- Show why creating the React root once is important (p6).
- Encourage migrating examples into a small local React project later to learn the real build flow.

Next steps (suggested exercises for students)
- Convert one example into a small component with props.
- Replace CDN usage with a simple Vite or CRA setup.
- Style the product card with CSS.
