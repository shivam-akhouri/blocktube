import { createSlice } from "@reduxjs/toolkit";

export const uploadSlice = createSlice({
    name:"upload",
    initialState: {
        uploading: false,
    },
    reducers: {
        setUploading: state=>{
            state.uploading = true;
        },
        resetUploading: state=>{
            state.uploading = false;
        }
    }
})

export const {setUploading, resetUploading} = uploadSlice.actions;
export default uploadSlice.reducer;