import { createSlice } from "@reduxjs/toolkit";
import { PhotoDataType } from "../App";

interface photoTypeState {
  photos: PhotoDataType[];
}

const photoStore = createSlice({
  name: "photos",
  initialState: { photos: [] } as photoTypeState,
  reducers: {
    fetchPhoto(state, action) {
      state.photos = action.payload.data;
    },
  },
});

export default photoStore;
