import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle'
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.status = 'idle';
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'error';
            });
    }
});

export const fetchPosts = createAsyncThunk('posts/get', async () => {
    try {
        const x = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`);
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

export default postSlice.reducer;