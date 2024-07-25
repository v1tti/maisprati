import { useState } from 'react'
import QRCode from 'qrcode.react'


const QRCodeGenerator = () => {
    const [text, setText] = useState('');
  
    return (
      <div>
        <h1>QR Code Generator</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        {text && (
          <div>
            <QRCode value={text} size={256} /> 
          </div>
        )}
      </div>
    );
  };
  

export default QRCodeGenerator