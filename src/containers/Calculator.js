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
    </div>
  )
}

export default Calculator