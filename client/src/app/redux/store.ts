import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../../shared/redux/eventSlice";
import clientSlice from "../../shared/redux/clientSlice";

export const store = configureStore({
  reducer: {
    events: eventSlice,
    clients: clientSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch