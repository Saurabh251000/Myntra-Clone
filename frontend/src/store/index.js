import { configureStore } from '@reduxjs/toolkit'
import ItemSlice from './ItemSlice'
import fetchStatusSlice from './fetchStatusSlice';
import wishlistSlice from './wishlistSlice';
import BagSlice from './BagSlice';
import ProfileSlice from './ProfileSlice';

const myntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    wishlist: wishlistSlice.reducer,
    baglist: BagSlice.reducer,
    profile : ProfileSlice.reducer,
  }
})

export default myntraStore;