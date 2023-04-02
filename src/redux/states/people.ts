import { createSlice } from "@reduxjs/toolkit";
import type { Person } from "../../interfaces/people";
import { getLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";

const initialState : Person[] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage('people') ? JSON.parse(localStorage.getItem('people') as string) : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage('people', state);
      return action.payload;
    }
  }
})

export const { addPeople } = peopleSlice.actions;