import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';

datadogRum.init({
    applicationId: 'a46388de-ce79-4a9c-b5f0-1e78bfdb6aab',
    clientToken: 'pub404aa95c2a8f91e4b1edafd05813fff7',
    site: 'datadoghq.com',
    service: 'lab-bw',
    env: 'local',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
});

datadogLogs.init({
    clientToken: 'pub404aa95c2a8f91e4b1edafd05813fff7',
    site: 'datadoghq.com',
    service: 'lab-bw',
    env: 'local',
    version: '1.0.0',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
});

datadogRum.setUser({
    id: 'user-id',
    email: 'dwinchester@gmail.com',
    name: 'Dean Winchester',
    cpf: '123.456.789-00',
    role: 'hunter'
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
