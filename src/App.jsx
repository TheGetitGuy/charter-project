import { useEffect, useState } from 'react' 
import './App.css'
import fakeFetch from './assets/fakeFetch'
import CostTable from './components/CostTable'
import UserSelector from './components/UserSelector'

function App() { 
  const tableSize = 10
  const [queryName, setQueryName] = useState("")
  const [optionsForUserSelector, setOptionsForUserSelector] = useState([])
  
  useEffect(()=>{
    const setOfNames = new Set()
    fakeFetch().then((res)=>res).then((data)=>{
      data.forEach((purchaseData)=>{
        if(purchaseData.userName){
        setOfNames.add(purchaseData.userName)}
        console.log(setOfNames.values())
      })
      setOptionsForUserSelector(setOfNames.values())
    })

  },[])

 return (
    <>
    <div className="App">
      <UserSelector querySetter={setQueryName} optionArray={optionsForUserSelector}/>
      <CostTable size={10} startIndex={0} userName={queryName}/>
    </div>
    
    </>
  )
}

export default App
