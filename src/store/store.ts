import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import animalStore from "./animal";
import photoStore from "./photo";

export const store = configureStore({
  reducer: { animalStore: animalStore.reducer, photoStore: photoStore.reducer },
});

export type RootState = ReturnType<typeof store.getState>; // store의 state 타입
export type AppDispatch = typeof store.dispatch; // action을 dispatch하는 함수 타입

export const useAppdispatch = () => useDispatch<AppDispatch>();
