export const useCounter = () => {
  const counter = (
    element: HTMLElement,
    start: number,
    end: number,
    duration: number,
    suffix: string = ''
  ) => {
    let current = start
    const range = end - start
    const increment = end > start ? 1 : -1
    const step = Math.abs(Math.floor(duration / range))

    const timer = setInterval(() => {
      current += increment
      let formattedNumber: string | number = current

      if (current >= 1000) {
        formattedNumber = (current / 1000).toFixed(1) + 'k'
      }

      element.textContent = formattedNumber + suffix

      if (current === end) {
        clearInterval(timer)
      }
    }, step)
  }

  return { counter }
}