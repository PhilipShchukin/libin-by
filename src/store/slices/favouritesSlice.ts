import { createSlice } from '@reduxjs/toolkit';

import { FavouritesType } from '../../types/types';

const initialFavouritesState: FavouritesType = {};

const favSlice = createSlice({
    name: 'favourites',
    initialState: initialFavouritesState,
    reducers: {
        setSwitchFavourites(state: FavouritesType, action) {
            const id = action.payload;
            const isFavourite = state[id];

            if (isFavourite) {
                delete state[id];
            } else {
                state[id] = true;
            }
        },

        setDeleteAll(state) {
            state = {};
        },

        setReplaceAll(state, action) {
            state = action.payload;
        },
    },
});


export const {  setSwitchFavourites, setDeleteAll, setReplaceAll } = favSlice.actions;

export default favSlice.reducer;
