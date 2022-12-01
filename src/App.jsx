import { useState } from 'react' 
import './App.css'
import CostTable from './components/CostTable'

function App() { 
  const tableSize = 10

 return (
    <>
    <div className="App">
      <CostTable size={10} startIndex={0}/>
    </div>
    
    </>
  )
}

export default App
