import React from 'react'

function Header({setDarkMode,noteColor,SetColor}) {
  return (
    <div className='header'>
        <h1>Notes </h1>
        <span>  
        <label >Background Color</label>
        <input type="color"  onChange={(e)=>noteColor(e.target.value)}/>
        </span>
        <span>  
        <label >Note Color</label>
        <input type="color"  onChange={(e)=>SetColor(e.target.value)}/>
        </span>
        <button onClick={()=> setDarkMode((prev)=> ! prev)} className='save'>Toglle mode</button>
    </div>
  )
}

export default Header