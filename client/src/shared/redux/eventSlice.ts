import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface eventState {
  title: string,
  start: Date,
  duration?: string,
  procedure?: string,
  inst?: string,
  notes?: string,
}

const initialState: Array<eventState> = [{
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
export const selectEvents = (state: any) => state.events.value