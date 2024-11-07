import IPost from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import getDataByEndpoint from "../../services/api.service";
import {endpoints} from "../../constants/urls";

type postsSliceType = {
    posts: IPost[]
}

const postsInitialState: postsSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk("postsSlice/loadPosts", async (_, thunkAPI) => {
    try {
        const receivedData = await getDataByEndpoint<IPost>(endpoints.posts);
        return thunkAPI.fulfillWithValue(receivedData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const postsSlice = createSlice({
    name: "postsSlice",
    initialState: postsInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action: PayloadAction<unknown>) => {
                console.log(action.payload);
            })
    }
})

export {
    loadPosts,
    postsSlice
}