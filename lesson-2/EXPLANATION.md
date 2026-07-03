# Lesson 2 — Components, Props, and Conditional Rendering (if / else)

Components
- Small reusable pieces of UI implemented as JavaScript functions that return JSX.
- Signature: `function ComponentName(props) { return <JSX/> }`.
- Use by placing `<ComponentName />` in JSX.

Props
- Data passed from parent to child as attributes.
- Received as a single object argument (`props`) or destructured: `function ChatMessage({ message, sender }) { ... }`.
- Example usage:
  - Parent: `<ChatMessage message="hi" sender="user" />`
  - Child: `function ChatMessage({message, sender}) { return <div>{message}</div> }`

Conditional rendering (if / else)
- Use `&&` for simple conditions:
  - `{condition && <OneThing/>}` renders `<OneThing/>` only when condition is truthy.
- Use ternary for two branches:
  - `{condition ? <WhenTrue/> : <WhenFalse/>}`.
- Use `if` inside a component to decide what to return:
  - `function C(props) { if (props.showA) return <A/>; return <B/> }`.
- In the chatbot example:
  - `sender === 'robot' && <img src="robot.png" />` shows the robot avatar only for robot messages.
  - You can also write a ternary to render different classes or structures based on sender.

Quick note
- Combine props and conditional rendering to make components flexible: decide what to render based on prop values.
