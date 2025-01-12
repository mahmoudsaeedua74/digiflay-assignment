import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice"
const store = configureStore({
  reducer: {
    formSlice
  },
});
export default store;
type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type RootDispatch = AppStore["dispatch"];
