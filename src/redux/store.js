import { configureStore } from '@reduxjs/toolkit';
import { activeComponentSlice } from './activeComponent/activeComponentSlice';
import { songsSlice } from './songs/songsSlice';

import { userSlice } from './user/userSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    activeComponent: activeComponentSlice.reducer,
    songs: songsSlice.reducer,
  },
});
