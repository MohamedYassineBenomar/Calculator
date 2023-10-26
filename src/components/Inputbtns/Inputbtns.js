import React from 'react'
import './Inputbtns.scss'

function Inputbtns() {
  return (
    <div id="inputbtns-container">
        <table>
            <tr>
                <td colspan="2"><button id='ac-btn' className='btns' value='AC'>AC</button></td>
                <td><button className='btns operations-btns' value='/'>/</button></td>
                <td><button className='btns operations-btns' value='X'>X</button></td>
            </tr>
            <tr>
                <td><button className='btns' value='1'>1</button></td>
                <td><button className='btns' value='2'>2</button></td>
                <td><button className='btns' value='3'>3</button></td>
                <td><button className='btns operations-btns' value='-'>-</button></td>
            </tr>
            <tr>
                <td><button className='btns' value='4'>4</button></td>
                <td><button className='btns' value='5'>5</button></td>
                <td><button className='btns' value='6'>6</button></td>
                <td><button className='btns operations-btns' value='+'>+</button></td>
            </tr>
            <tr>
                <td><button className='btns' value='7'>7</button></td>
                <td><button className='btns' value='8'>8</button></td>
                <td><button className='btns' value='9'>9</button></td>
                <td rowspan="2"><button id='equal-btn' className='btns' value='='>=</button></td>
            </tr>
            <tr>
                <td colspan="2"><button className='btns' value='0'>0</button></td>
                <td><button className='btns' value='.'>.</button></td>
            </tr>
        </table>

        
        
       
        
    </div>
  )
}

export default Inputbtns