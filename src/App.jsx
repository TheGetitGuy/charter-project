import { useEffect, useState } from 'react' 
import './App.css' 
import CostTable, {sortingMethodObject} from './components/CostTable' 
const sortingMethodNames = Object.keys(sortingMethodObject)
function App() {
  const [option, setOption] = useState();
  //leaving option choice to the component father.
  const handleOptionChange = (optionEvent)=>{
    console.log(optionEvent)
    setOption(optionEvent.target.value)
  }
 return (
    <>

    <select onChange={handleOptionChange}>
      {sortingMethodNames.map((name)=>{
        return <option value={name}>{name}</option>
      })}
    </select>

    <div className="App"> 
      <CostTable sortingMethod={option}/>
    </div>
    </>
  )
}

export default App
