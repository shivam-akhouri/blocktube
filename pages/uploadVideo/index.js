import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUploading, resetUploading } from '../../utils/state/slices/uploadSlices';

const UploadPage = () => {
    const dispatch = useDispatch();
    const uploading  = useSelector(state=>state.upload.uploading)
  return (
    <>
    <div>{uploading===true ? "True": "False"}</div>
    </>
  )
}

export default UploadPage;