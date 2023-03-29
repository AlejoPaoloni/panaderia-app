import { applyMiddleware, combineReducers, createStore } from "redux";

import BreadsReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
    orders: OrdersReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))