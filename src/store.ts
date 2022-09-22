import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';

const combinedReducer = combineReducers({
  counter: counterReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'counter/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});
