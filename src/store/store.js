import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import postSlice from './postSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
        posts: postSlice
    }
});

export default store;