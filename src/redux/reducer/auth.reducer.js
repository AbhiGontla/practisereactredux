
import { createReducer } from "@reduxjs/toolkit";
import AuthProvider from "../../Services/AuthService";
import { AuthAction } from "../Actions/auth.action";

const initialState = {
    currentUser:AuthProvider.getAuthUser(),
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AuthAction.login, (state, action) => {
      state.currentUser = action.payload;
      AuthProvider.setAuthUser(action.payload);
    })
    .addCase(AuthAction.logout, (state) => {
      state.currentUser = null;
      AuthProvider.removeAuthUser();
    });
})

export default authReducer;