// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/authReducer";
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducers/authReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})