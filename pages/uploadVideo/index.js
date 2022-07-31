import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUploading, resetUploading } from '../../utils/state/slices/uploadSlices';
import Button from '../../components/core/Button/Button';
import UploadProgressBar from '../../components/UploadProgressBar/UploadProgressBar';

const UploadPage = () => {
    const dispatch = useDispatch();
    const uploading  = useSelector(state=>state.upload.uploading)
  return (
    <>
    <div>{uploading===true ? "True": "False"}</div>
    <Button name="Next"/>
    <UploadProgressBar/>
    </>
  )
}

export default UploadPage;