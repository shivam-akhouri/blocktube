import { configureStore } from "@reduxjs/toolkit";
import uploadSlice from "./slices/uploadSlices";

export default configureStore({
    reducer: {
        upload: uploadSlice
    }
})