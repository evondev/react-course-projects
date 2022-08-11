import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {},
  reducers: {
    func: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});
// export const {  } = campaignSlice.actions;
export default campaignSlice.reducer;
