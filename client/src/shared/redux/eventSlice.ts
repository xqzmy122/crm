import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface eventState {
  id: string,
  title: string,
  start: Date,
  duration?: string,
  procedure?: string,
  inst?: string,
  notes?: string,
}

const initialState: Array<eventState> = []

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<eventState>) {
      return [...state, action.payload]
    },

    deleteEvent(state, action) {
      return state.filter((event) => {
        return (event.id !== action.payload.id)
      })
    }
  }
})

export const {addEvent, deleteEvent} = eventSlice.actions
export default eventSlice.reducer
export const selectEvents = (state: any) => state.events.value