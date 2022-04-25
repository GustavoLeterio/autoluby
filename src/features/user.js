import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userToken",
    initialState: { value: { token: null } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;