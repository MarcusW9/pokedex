import { setupCounter } from './counter.js'

describe('setupCounter', () => {
  let button

  beforeEach(() => {
    document.body.innerHTML = '<button id="counter"></button>'
    button = document.querySelector('#counter')
    setupCounter(button)
  })

  it('starts at 0', () => {
    expect(button.textContent).toBe('Count is 0')
  })

  it('increments on click', () => {
    button.click()
    button.click()
    expect(button.textContent).toBe('Count is 2')
  })
})
