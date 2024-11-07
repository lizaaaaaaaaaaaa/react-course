import IUser from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import getDataByEndpoint from "../../services/api.service";
import {endpoints} from "../../constants/urls";

type usersSliceType = {
    users: IUser[]
}

const usersInitialState: usersSliceType = {
    users: []
}

const loadUsers = createAsyncThunk("usersSlice/loadUsers", async (_, thunkAPI) => {
    try {
        const receivedData = await getDataByEndpoint<IUser>(endpoints.users);
        return thunkAPI.fulfillWithValue(receivedData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: usersInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<unknown>) => {
                console.log(action.payload);
            })
    }
})

export {
    loadUsers,
    usersSlice
}