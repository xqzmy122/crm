import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<{}> = [{
    title: "Gym",
    start: new Date(),
    // duration: "02:00",
  },]

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<{title: string, start: Date}>) {
      return [...state, action.payload]
    }
  }
})

export const {addEvent} = eventSlice.actions
export default eventSlice.reducer