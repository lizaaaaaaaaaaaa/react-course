import IComment from "../../models/IComment";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import getDataByEndpoint from "../../services/api.service";
import {endpoints} from "../../constants/urls";

type commentsSliceType = {
    comments: IComment[]
}

const commentsInitialState: commentsSliceType = {
    comments: []
}

const loadComments = createAsyncThunk("commentsSlice/loadComments", async (_, thunkAPI) => {
    try {
        const receivedData = await getDataByEndpoint<IComment>(endpoints.comments);
        return thunkAPI.fulfillWithValue(receivedData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: commentsInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action:PayloadAction<unknown>) => {
                console.log(action.payload);
            })
    }
})

export {
    loadComments,
    commentsSlice
}