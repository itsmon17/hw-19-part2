import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isFormValid: false,
};

export const authSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    emailValidate(state, action) {
      state.email = action.payload;
    },
    passwordValidate(state, action) {
      state.password = action.payload;
    },
    logOut(state) {
      state.isFormValid = false;
    },
    logIn(state) {
      state.isFormValid = true;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

// export const reducerForm = (state = defaultState, action) => {
//   switch (action.type) {
//     case actionTypeReducer.EMAIL:
//       return {
//         ...state,
//         email: (state.email = action.payload),
//       };
//     case actionTypeReducer.PASSWORD:
//       return {
//         ...state,
//         password: (state.password = action.payload),
//       };
//     case actionTypeReducer.LOG_OUT:
//       return defaultState;

//     case actionTypeReducer.LOGIN:
//       return {
//         isFormValid: true,
//       };
//     default:
//       return state;
//   }
// };
