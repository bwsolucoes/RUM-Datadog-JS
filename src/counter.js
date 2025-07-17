import { datadogLogs } from '@datadog/browser-logs'

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    datadogLogs.logger.info('Botão de counter clickado', { counter_number: counter });
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
