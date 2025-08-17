import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Appointment from "../ui/Appointment/Appointment";

export interface eventState {
  title: string,
  id: string,
  date: Date,
  procedure: string,
  base?: string,
  gel?: string,
  gel_lak?: string,
  top?: string,
  price?: number,
  notes?: string,
  info?: string,
  client_id?: string,
}

const initialState: Array<eventState> = []

export const fetchAppointments = createAsyncThunk(
  "events/fetchAppointments",
  async(url: string, {rejectWithValue}) => {
    try {
      const res = await fetch(url)
      const appointments = await res.json()
      return appointments
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

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
  },
  extraReducers: builder => {
    builder.addCase(fetchAppointments.fulfilled, (state, action: PayloadAction<eventState[]>) => {
      const appointmentsWithCorrectedDateType = action.payload.map((appointment) => {
        appointment.date = new Date(appointment.date)
        return appointment
      })
      return [...state, ...appointmentsWithCorrectedDateType]
    })
  }
})

export const {addEvent, deleteEvent} = eventSlice.actions
export default eventSlice.reducer
export const selectEvents = (state: any) => state.events.value