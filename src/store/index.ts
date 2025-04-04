// import { AnyIfEmpty, FixTypeLater } from "react-redux/es/types";
import { combineReducers, compose, createStore, Store } from "redux";
import { usersCountReducer, usersReducer } from "store/reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducers = combineReducers({
  usersData: usersReducer,
  userCount: usersCountReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<RootStoreType> = createStore(rootReducers, composeEnhancers());

export type RootStoreType = ReturnType<typeof rootReducers>;

//@ts-ignore
window.store = store;
// export type RootStateOrAny = AnyIfEmpty<FixTypeLater>;

