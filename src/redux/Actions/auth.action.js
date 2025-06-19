import { createAction } from "@reduxjs/toolkit";

export const AuthAction = {
    login:createAction("auth/login"),
    logout:createAction("auth/logout"),
}
