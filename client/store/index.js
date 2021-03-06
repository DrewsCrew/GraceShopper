import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import products from "./productsReducer";
import product from "./singleProductReducer";
import cartReducer from "./cartReducer";
import userInformationReducer from "./userInformationReducer";

const reducer = combineReducers({
  auth,
  products,
  product,
  cartReducer,
  userInformationReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;

export * from "./auth";
