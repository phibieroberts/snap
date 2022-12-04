import React, { useState } from 'react'
import "./Drop.css"

function Drop() {
    const[drop,setDrop]=useState(false)
    const showDrop=()=>{
        setDrop(true)

    }
    const hideDrop=()=>{
        setDrop(false)

    }
  return (
    <div className='dropdown'>
        <div className="drop-menu"  onMouseEnter={showDrop} onMouseLeave={hideDrop} >
<h1 >Dropdown</h1>
{drop? <ul onMouseEnter={showDrop}>
    <li>one</li>
    <li>one</li>
    <li>one</li>
    <li>one</li>

</ul>
: null}
        </div>
        <div className="drop-menu" onMouseEnter={showDrop} onMouseLeave={hideDrop}>
        <h1>Dropdown2</h1>
{drop ? <ul onMouseEnter={showDrop}>
    <li>two</li>
    <li>two</li>
    <li>two</li>
    <li>two</li>

</ul>
: null}
        </div>

        </div>
  )
}

export default Drop