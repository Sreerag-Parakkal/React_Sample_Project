import React, { useState } from 'react'

function Home() {
    const [color,setColor] = useState("Red");
    function changeColor(){
        if(color === 'Red'){
            setColor('Blue');
        }else{
            setColor('Red')
        }
    }
  return (
    <div>
        <h2>Color: <span style={{background:color , color:'white', padding:'3px'}}>{color}</span></h2>
        <button onClick={()=>changeColor()}>changeColor</button>
    </div>
  )
}

export default Home