import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userIdSlice from "../../shared/slices/UserSlice";
import { usersApi } from "../../shared/api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    userId: userIdSlice,
    [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
