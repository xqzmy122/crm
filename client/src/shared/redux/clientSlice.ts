import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

interface clientState {
  id: string,
  name: string,
  insta: string,
}

const initialState: Array<clientState> = []

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",

  async(url: string, {rejectWithValue}) => {
    try {
      const res = await fetch(url)
      const clients = await res.json()
      return clients
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient(state, action: PayloadAction<clientState>) {
      return [...state, action.payload]
    },

    deleteClient(state, action: PayloadAction<string>) {
      return state.filter((client) => {
        return client.id !== action.payload
      })   
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchClients.fulfilled, (state, action: PayloadAction<clientState[]>) => {
      return [...state, ...action.payload]
    })
  }
})

export const {addClient, deleteClient} = clientSlice.actions
export default clientSlice.reducer
