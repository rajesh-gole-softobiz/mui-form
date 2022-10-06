import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/UserSlice";

const store = configureStore({
    reducer: {
        usersReducer : usersReducer,
    }
})

export default store