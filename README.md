# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Install redux

yarn add @reduxjs/toolkit react-redux

# Create a store javaScript file

store.js
code these:
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
reducer: {
userState: {},
taskListState: {},
counterState: {},
},
});

export default store;

# Wrap everything by Provider component from react-redux

import { Provider } from "react-redux";
import store from "./store.js";

    <Provider store={store}>
      <App />
    </Provider>

# CreateSlice

createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
