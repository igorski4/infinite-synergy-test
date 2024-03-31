import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
};

export const userIdSlice = createSlice({
    name: "userId",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setUser } = userIdSlice.actions;
export const userId = (state) => state.userId;
export default userIdSlice.reducer;
