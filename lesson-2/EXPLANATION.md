# Lesson 2 — Components, Props, and the Chatbot example

Overview
- Lesson-2 teaches React components and props using a small chatbot practice example.
- Key topics: function components, props (destructuring), JSX fragments, conditional rendering, and composing components.

How to run
- Open `lesson-2/chatbot.html` in a browser. It uses CDN React/ReactDOM/Babel and runs without a build step.

Files
- chatbot.html — contains `ChatInput` and `ChatMessage` components and a static example app.
- robot.png, user.png — avatars used by messages.

Quick notes (no extra details)
- ChatInput is currently uncontrolled; convert to a controlled component with `useState` for interactivity.
- ChatMessage receives `{message, sender}` via props and uses conditional rendering to show avatars.
- To make the chat interactive, store messages in state in a parent component and update via callbacks.

Exercises
- Make ChatInput controlled and handle send (Enter + button).
- Move messages to state and render with `.map()`.
- Add timestamps and persist messages to `localStorage`.

Accessibility
- Add a label for the input and ensure keyboard accessibility.

Note
- This version is for learning; use a proper build setup for production.
