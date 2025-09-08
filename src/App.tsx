import './App.css'
import ControlPanel from './components/ControlPanel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExtensionsPage from './pages/ExtensionsPage'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ControlPanel />} />
      <Route path="/extensions" element={<ExtensionsPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
