import React, { useState } from 'react'
import './color.css'
const RandomColor = () => {
    const [typeOf, setTypeOf] = useState('hex')
    const [color, setColor] = useState('#ffffff')


    function generateHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'

        for (let i = 0; i < 6; i++){
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }
        setColor(hexColor)

    }

    function generateRGBColor() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        setColor(`rgb(${r},${g},${b})`);
                console.log(color)
    }
  return (
    <div className='container'>
        <div>
        <button onClick={() => setTypeOf('hex')}>Create HEX color</button>
        <button onClick={() => setTypeOf('rgb')}>Create RGB color</button>
        <button onClick={typeOf === 'hex' ? generateHexColor : generateRGBColor}>Generate random color</button>
        </div>
        <div className='color-container' style={
            {width: '400px', 
             height: '400px',
             borderRadius: '50%',
             background: color, 
            }
        }>{color}</div>
    </div>
  )
}

export default RandomColor
