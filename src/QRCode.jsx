import React from 'react'

const QRCode = () => {
  return (
    <div className='app-container'>
        <h1>QR Code Generator</h1>
        <img src='images/img1.jpg' className='qr-code-image'/>
        <div>
            <label htmlFor='dataInput' className='input-label'>
                Data for QR Code:
            </label>
            <input type='text' id='datainput' 
            placeholder='Enter Data For QR Code'/>
            <label htmlFor='sizeInput' className='input-label'>
                Image Size(e.g.,150):
            </label>
            <input type='text' id='sizeinput' 
            placeholder='Enter Image Size'/>
            <button className='generate-button'>Generate QR Code</button>
            <button className='download-button'>Download QR Code</button>
        </div>
      <p className='footer'>Designed By <a href='https://github.com/Manojkumar-2005'>MANOJKUMAR</a></p>
    </div>
  )
}

export default QRCode
