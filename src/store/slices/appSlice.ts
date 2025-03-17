import { createSlice } from "@reduxjs/toolkit";

interface AppSliceProps {
  sideMenuOpen: boolean;
}

const initialState: AppSliceProps = {
  sideMenuOpen: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleAdminPanelSideMenu: (state) => {
      const s = state;

      s.sideMenuOpen = !s.sideMenuOpen;
    },
  },
});

export const { toggleAdminPanelSideMenu } = appSlice.actions;
export default appSlice.reducer;
