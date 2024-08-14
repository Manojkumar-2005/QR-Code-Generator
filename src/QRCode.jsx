import React, { useState } from 'react'

const QRCode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrData,setQrData]=useState("");
  const [qrSize,setQrSize]=useState(150)
  async function generateQR(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }catch(error){
      console.error("error Generating QR Code",error);
    }finally{
      setLoading(false);
    }
  }
  function downloadQR(){
    fetch(img).then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error)=>{
      console.error("Error Downloading Qr Code",error);
    });
  }
  return (
    <div className='app-container'>
        <h1>QR Code Generator</h1>
        {loading &&<p>Please Wait...</p>}
        {img && <img src={img} className='qr-code-image'/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>
                Data for QR Code:
            </label>
            <input type='text'value={qrData}  id='datainput' 
            placeholder='Ex:Chrome.com' onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label'>
                Image Size:
            </label>
            <input type='text'  id="size" placeholder='Ex:150' onChange={(e)=>{
      setQrSize(Number(e.target.value))
    }}/>
            <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className='download-button'onClick={downloadQR}>Download QR Code</button>
        </div>
      <p className='footer'>Designed By <a href='https://github.com/Manojkumar-2005'>MANOJKUMAR</a></p>
    </div>
  )
}

export default QRCode
