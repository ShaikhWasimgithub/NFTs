// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";

function Placeholder({ title }) {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 50px" }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
    </main>
  );
}

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/marketplace"
          element={<Placeholder title="Marketplace" />}
        />
        <Route path="/rankings" element={<Placeholder title="Rankings" />} />
        <Route
          path="/wallet"
          element={<Placeholder title="Connect a Wallet" />}
        />
        <Route
          path="/signup"
          element={<Placeholder title="Create Account" />}
        />
      </Routes>
    </>
  );
}
