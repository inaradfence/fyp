// import { configureStore } from "@reduxjs/toolkit";
// import sidebarReducer from "./sidebarSlice";
// import themeReducer from "./themeSlice";
// import onlineReducer from "./onlineSlice";

// export const store = configureStore({
//   reducer: {
//     sidebar: sidebarReducer,
//     theme: themeReducer,
//     online: onlineReducer,
//   },
// });

// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import onlineReducer from './onlineSlice'; // Assuming you have this slice

const store = configureStore({
  reducer: {
    online: onlineReducer, // Replace with your actual reducers
  },
});

export default store;
