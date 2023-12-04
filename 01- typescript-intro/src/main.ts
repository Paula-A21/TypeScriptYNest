import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import {pokemonId} from './intro/02-objects.ts'
import { pikachu, charmander } from './intro/04-injection.ts'

const typescriptLogo2 = new Image()
typescriptLogo2.src = typescriptLogo
typescriptLogo2.width = 100

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <p> Hola ${charmander} , ${pikachu} </p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
