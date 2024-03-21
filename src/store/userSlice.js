import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    currentUserEmail: '',
    status: 'idle'
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addEmail(state, action) {
            state.currentUserEmail = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.status = 'idle';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'error';
            });
    }
});

export const fetchUsers = createAsyncThunk('users/get', async () => {
    try {
        const x = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
        const y = await x.json();
        if (y.success)
            return y.data;
        else
            return [];
    }
    catch (err) {
        console.log(err);
    }
})

export const { addEmail } = userSlice.actions;
export default userSlice.reducer;