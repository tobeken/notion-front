import { createSlice } from "@reduxjs/toolkit"

const initialState ={value:{}}

export const memoSlice = createSlice({
    name:"memo",
    initialState,
    reducers:{
        setMemo:(state,action) => {
            state.value =action.payload;
        },
    },

});

export const { setUser } = userSlice.actions;
export default memoSlice.reducer;