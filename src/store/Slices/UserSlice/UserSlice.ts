import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/models";

interface IState {
  currentUser: IUser;
}

const initialState: IState = {
  currentUser: {
    name: "",
    email: "",
    _id: "",
    avatar: ""
  }
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {}
});

const { reducer: userReducer } = userSlice;

const userActions = {};

export { userActions, userReducer };
