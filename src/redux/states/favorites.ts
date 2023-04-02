import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "../../interfaces/people";

const initialState : Person[] = [];

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: getLocalStorage('favorites') ?? initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Person[]>) => {

      setLocalStorage('favorites', action.payload);

      return action.payload;
    }
  }
})

export const {addFavorite} = favoriteSlice.actions;