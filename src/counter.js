export function setupCounter(element) {
  let count = 0
  const setCount = (value) => {
    count = value
    element.textContent = `Count is ${count}`
  }
  element.addEventListener('click', () => setCount(count + 1))
  setCount(0)
}
