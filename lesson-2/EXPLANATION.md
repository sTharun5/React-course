# Lesson 2 — What I used and what they are

This file lists the things used in lesson-2 and a short explanation of each.

- React
  - A JavaScript library for building user interfaces. Used here (via CDN) to create components and build the chat UI.

- ReactDOM
  - The package that renders React elements into the browser DOM. We use `ReactDOM.createRoot(container).render(...)` to mount the app.

- Babel (in-browser)
  - A transpiler used here in the browser to convert JSX into plain JavaScript (`type="text/babel"`). This is for learning only; in production you should use a build step.

- JSX
  - A JavaScript syntax extension that lets you write HTML-like code inside JS functions (e.g., `<ChatInput />`). Babel compiles it to JS.

- Function components
  - Small reusable functions that return JSX. Examples: `ChatInput` and `ChatMessage`.

- Props
  - The data passed into components as attributes. For example, `ChatMessage` receives `{ message, sender }` and uses those values to render the message.

- JSX fragments
  - `<>...</>` shorthand used to group multiple elements without adding an extra DOM node.

- Conditional rendering
  - The `condition && <JSX/>` pattern used to show avatars only for specific senders (robot/user).

- Avatars (robot.png, user.png)
  - Image files used as avatars for bot and user messages. They are referenced with relative paths from `chatbot.html`.

- Uncontrolled input (current)
  - `ChatInput` returns an `<input>` but does not store its value in React state. This is called an uncontrolled input.

- createRoot (single creation)
  - Create the React root once (with `createRoot`) and reuse it to render updates; do not call `createRoot` repeatedly.

- CDN usage (unpkg)
  - All libraries are loaded from CDN (unpkg). This allows running examples by opening the HTML file directly, but it is not the recommended setup for production.

- Static example vs stateful app
  - Current `chatbot.html` shows a static example composed of components. To make it interactive you would add `useState` and manage messages in state.

If you want, I can now replace the current lesson-2 EXPLANATION.md with this version (concise list).