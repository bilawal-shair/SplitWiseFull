import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlices/UserReducer";

const store = configureStore({
    reducer:{
        user: UserReducer,
    },
});

export default store;