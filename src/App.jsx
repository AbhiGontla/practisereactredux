import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchableTable from './SearchableTable'
import RouteLayout from './Components/RouteLayout.jsx'

// Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React AA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SearchableTable /> */}
      <RouteLayout />
    </>
  )
}

export default App
