import { FormValues, userInformation } from "@/types/formik.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const userInfo = createAsyncThunk(
  "formSlice/userInfo",
  async function (values: FormValues) {
    const options = {
      url: "http://localhost:1337/user-informations",
      method: "POST",
      data: values,
    };
    toast.loading("loading");
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  }
);
const initialState: userInformation = {
  users: [],
};
const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(userInfo.fulfilled, (state, action) => {
      toast.dismiss();
      toast.success(action.payload.response);
      state.users.push(action.payload.data);
    });
    builder.addCase(userInfo.rejected, (state, action) => {
      toast.dismiss();
      toast.error(action.meta.requestStatus+ " please try later");
    });
  },
});

export default formSlice.reducer;
