import { createSlice } from "@reduxjs/toolkit";
import { AnimalsDataType } from "../App";

interface animalTypeState {
  all: AnimalsDataType[];
  cat: AnimalsDataType[];
  dog: AnimalsDataType[];
}

const animalStore = createSlice({
  name: "animals",
  initialState: {
    all: [],
    cat: [],
    dog: [],
  } as animalTypeState,
  reducers: {
    fetchAll(state, action) {
      state.all = action.payload.data;
    },
    fetchCat(state, action) {
      state.cat = action.payload.data;
    },
    fetchDog(state, action) {
      state.dog = action.payload.data;
    },
  },
});

export default animalStore;
