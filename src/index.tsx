import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

export type RootState = typeof defaultState;

const ADD_USER: "ADD_USER" = "ADD_USER";
const REMOVE_USER: "REMOVE_USER" = "REMOVE_USER";
const INITIALIZE_USERS: "INITIALIZE_USERS" = "INITIALIZE_USERS";

export interface IAddress {
  street: string;
  suite: string;
}

export interface IUser {
  id: number;
  image: string | null;
  name: string;
  address: IAddress;
  email: string;
  phone: string;
}

export interface DefaultState {
  users: IUser[];
}

const defaultState: DefaultState = {
  users: [],
};

export const addUser = (user: IUser) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (id: number) => ({
  type: REMOVE_USER,
  payload: id,
});

export const initializeUsers = (users: IUser[]) => ({
  type: INITIALIZE_USERS,
  payload: users,
});

type Actions =
  | ReturnType<typeof addUser>
  | ReturnType<typeof removeUser>
  | ReturnType<typeof initializeUsers>;

const reducer = (
  state: DefaultState = defaultState,
  action: Actions
): DefaultState => {
  switch (action.type) {
    case ADD_USER:
      state.users = [action.payload, ...state.users];

      return state;
    case REMOVE_USER:
      state = {
        users: state.users.filter((user) => user.id !== action.payload),
      };

      return state;
    case INITIALIZE_USERS:
      state = {
        users: action.payload,
      };

      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
