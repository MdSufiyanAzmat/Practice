import React from 'react';
import {QRCode} from 'react-qr-code';

function Qr() {
    const [qrCode, setQrCode] = React.useState('');
    const [input, setInput] = React.useState('');
    
    const handleClick = () => {
        setQrCode(input);
        setInput('');
    }
    
    return (
        <div className="flex flex-col mt-10 gap-5 items-center">
            <h1 className="font-bold text-4xl">QR code generator</h1>
            <div>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type='text'
                    required={true} 
                    name='qr-code' 
                    placeholder='Enter Your Value Here.'
                    value={input}
                    className='border-2 border-black rounded outline-none px-5 py-2 mx-5 text-black'
                />
                <button 
                    disabled={!input.trim()} 
                    onClick={handleClick}
                    className='bg-blue-500 px-5 py-2 text-white font-bold text-[15px] cursor-pointer rounded'
                >
                    Generate
                </button>
            </div>
            <div>
                {qrCode && (
                    <QRCode 
                        value={qrCode}
                        size={350}
                    />
                )}
            </div>
        </div>  
    );
}

export default Qr;