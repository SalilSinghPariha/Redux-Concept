# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

To Install Redux

npm install react-redux@9.2.0

To install Redux Toolkit

npm install @reduxjs/toolkit@2.8.2

# Redux Toolkit Counter App

A simple Counter application built using **React** and **Redux Toolkit** to demonstrate the core Redux concepts.

## Concepts Covered

- Redux Toolkit
- configureStore()
- createSlice()
- Reducer
- Actions
- useSelector()
- useDispatch()
- React-Redux Provider

---

## Project Flow

User Clicks Button

↓
dispatch(action)

↓

Reducer Updates State

↓

Redux Store Updated

↓

useSelector Reads Updated State

↓

UI Re-renders Automatically

---

## createSlice()

`createSlice()` combines:

- Initial State
- Reducers
- Actions

into a single file, reducing Redux boilerplate code.

Example reducers:

- increment
- decrement

---

## Reducer

A reducer is a function that updates the application state based on the dispatched action.

Example:

- increment → count + 1
- decrement → count - 1

Redux Toolkit uses **Immer**, so we can write:

```js
state.count++;
```

instead of manually creating a new state object.

---

## Actions

Actions describe **what happened** in the application.

This project automatically creates actions using `createSlice()`.

```js
dispatch(increment());

dispatch(decrement());
```

---

## configureStore()

`configureStore()` creates the central Redux Store and registers all reducers.

```js
export const store = configureStore({
    reducer: {
        counterStore: counterReducer
    }
});
```

---

## useSelector()

`useSelector()` is used to **read data** from the Redux Store.

```js
const count = useSelector(
    state => state.counterStore.count
);
```

---

## useDispatch()

`useDispatch()` is used to **dispatch actions** to the Redux Store.

```js
dispatch(increment());

dispatch(decrement());
```

---

## Redux Data Flow

```
Component

↓

dispatch()

↓

Action

↓

Reducer

↓

Redux Store

↓

useSelector()

↓

UI Updated
```

---

## Folder Structure

```
src
│
├── redux
│   ├── store.js
│   └── slice
│       └── counterSlice.js
│
├── Components
│   └── Counter.jsx
│
├── App.jsx
└── main.jsx
```

---
- Redux stores global application state.
- `createSlice()` generates reducers and actions automatically.
- `configureStore()` creates the Redux Store.
- `useSelector()` reads state from the Store.
- `useDispatch()` sends actions to update the Store.
- Redux Toolkit uses **Immer** for immutable state updates.
- UI automatically re-renders when the Redux state changes.
