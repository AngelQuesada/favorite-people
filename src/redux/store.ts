import type { Person } from "../interfaces/people";
import {configureStore} from '@reduxjs/toolkit';
import { peopleSlice } from "./states/people";
import { favoriteSlice } from './states/favorites';

export interface AppStore {
  people: Person[],
  favorites: Person[]
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoriteSlice.reducer
  }
});