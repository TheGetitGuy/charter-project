 
import React, { useEffect, useState } from "react"


function UserSelector(props){
    const {querySetter, optionArray} = props
    const [options, setOptions] = useState([])

    function handleChange(e){
        console.log("user: " + e.target.value)
        querySetter(e.target.value)
    }
    
    useEffect(()=>{ 
        setOptions(Array.from(optionArray).map((option, index)=>{
            if(index ===  0){handleChange({target:{value: option }})}
            return (<option key={option + index} value={option}>{option}</option>) 
        }))
    },[optionArray])
    
    
    return(
        <select onChange={handleChange}>
            {options}
        </select>
    )
}

export default  UserSelector     