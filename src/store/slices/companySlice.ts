import { createSlice } from "@reduxjs/toolkit";
import { UserLoginViewModel } from "../api/generated/generatedApiAuth";
import { CompanyInformationViewModelForHomePage } from "../api/generated/generatedApiHome";

const initialState: CompanyInformationViewModelForHomePage = {
  name: "",
  adress: "",
  adressGateNumber: 0,
  district: "",
  provience: "",
  country: "",
  email: "",
  phone: "",
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      const s = state;
      const a = action;

      s.name = a.payload.name;
      s.adress = a.payload.adress;
      s.adressGateNumber = a.payload.adressGateNumber;
      s.district = a.payload.district;
      s.provience = a.payload.provience;
      s.country = a.payload.country;
      s.email = a.payload.email;
      s.phone = a.payload.phone;
    },
  },
});

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
