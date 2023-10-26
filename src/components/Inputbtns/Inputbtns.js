import React from 'react'
import './Inputbtns.scss'


function Inputbtns() {

    const handleClick = (event) => {
        const buttonValue = event.target.value;
    
        if (buttonValue) {
           
            const completeop = document.getElementById('complete-operations');
            const currentop = document.getElementById('current-operations');
            if (buttonValue === 'AC'){
                completeop.textContent = "";
                currentop.textContent = "0";
            }

            if(!isNaN(buttonValue) || buttonValue ==='.'){
              
                if(currentop.textContent !== '0' && completeop.textContent === ''){
                    currentop.textContent = buttonValue;
                    completeop.textContent = buttonValue;
                } else if(currentop.textContent === '0' && completeop.textContent === ''){
                    currentop.textContent = buttonValue;
                    completeop.textContent = buttonValue;
                } else if(currentop.textContent === '0' && completeop.textContent !== ''){
                    completeop.textContent = completeop.textContent + buttonValue;
                    currentop.textContent = buttonValue;
                } else {
                    if(currentop.textContent.length < 14){
                        completeop.textContent = completeop.textContent + buttonValue;
                        currentop.textContent = currentop.textContent + buttonValue;
                    }
                }     
            }
            if (buttonValue === 'x' && completeop.textContent.charAt(completeop.textContent.length - 2) !== "*" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "+" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "-" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "/" && completeop.textContent !== ''){
                completeop.textContent = completeop.textContent + " * ";
            }
            console.log(completeop.textContent[completeop.textContent.length-2]);
            if (/[+\-/]/.test(buttonValue) && completeop.textContent.charAt(completeop.textContent.length - 2) !== "*" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "+" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "-" && completeop.textContent.charAt(completeop.textContent.length - 2) !== "/" && completeop.textContent !== '') {
                completeop.textContent = completeop.textContent + " " + buttonValue + " ";
                currentop.textContent = '0';
            }
            if (buttonValue === '=') {
                currentop.textContent = eval(completeop.textContent);
                completeop.textContent = '';
            }
        }
    }
    

  return (
    <div id="inputbtns-container">
        <table onClick={handleClick}>
            <tr>
                <td colspan="2"><button id='ac-btn' className='btns' value='AC'>AC</button></td>
                <td><button className='btns operations-btns' value='/'>/</button></td>
                <td><button className='btns operations-btns' value='x'>x</button></td>
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