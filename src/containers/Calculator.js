import React from 'react'
import './Calculator.scss'
import Displayer from '../components/Displayer/Displayer'
import Inputbtns from '../components/Inputbtns/Inputbtns'

function Calculator() {
  return (
    <div id='container'>
      <div id='calculator-background'>
        <Displayer />
        <Inputbtns />
      </div>
      <div id="creator" style={{fontSize : '25px'}}>
          Made by <strong>~ Myassine Dev ~</strong>
      </div>
    </div>
  )
}

export default Calculator