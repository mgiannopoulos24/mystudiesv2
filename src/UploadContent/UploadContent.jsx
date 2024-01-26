import  Button  from '@mui/material/Button';
import React, { useState } from 'react';

const UploadContent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    console.log('Uploading file:', file);
  };

  return (
    <>
      <input type="file" style={{marginLeft:"10px"}} onChange={handleFileChange} />
      <Button variant="outlined" sx={{marginLeft:"10px",textTransform:"none"}} onClick={handleUpload}>Ανέβασμα</Button>
    </>
  );
};

export default UploadContent;
