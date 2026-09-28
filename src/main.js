import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>JS Template</h1>
    <button id="counter" type="button"></button>
  </main>
`

setupCounter(document.querySelector('#counter'))
