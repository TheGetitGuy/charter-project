import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../assets/fakeFetch" 
import handleData from "../../assets/handleData"
import numToStringMonthMap from "../../assets/numToMonth.json"
import { numericSort, alphabetSort } from "../../assets/sortingFunctions"  
const sortingMethodObject = {
    "default": (s)=>s,
    "totalPoints":  numericSort,
    "userName": alphabetSort,
}
export default function CostTable( { sortingMethod = "default" }) { 
    //options for sorting the table
    
    const [testData, setTestData] = useState([])
    const [monthSet, setMonthSet] = useState(null)

    useEffect( ()=>{
        fakeFetch()
        .then((res)=>{return res})
        .then((res)=>{setTestData(handleData(res))})
    },[sortingMethod])

    useEffect(()=>{ 
            const workingSet = new Set(testData.map((entry)=>{
                return Array.from(Object.keys(entry.points))
            }).flat())
            console.log("working-set", workingSet)
            setMonthSet(Array.from(workingSet).sort())
    },[testData])
    //loading render if fetch hasn't returned
    if (testData.length < 1) {
        return <div> ..Loading.. </div>
    }

    function renderFunction(){
        return (sortingMethodObject[sortingMethod](testData))
        .map((data, index) => <CostTableRow key={"costTable" + index} monthSet={monthSet} data={data}></CostTableRow>)
    }
    return (
        <>       
       
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th> 
                        {monthSet ? monthSet.map((monthToPrint)=>{ 
                            //create headers dynamically of all months used
                            return <th key={monthToPrint}>{numToStringMonthMap[monthToPrint]}</th>
                        }):null}
                        <th> Total-Points </th>
                    </tr>
                </thead>
                <tbody>
                    {testData?renderFunction():null}
                </tbody>
            </table> 
        </>
    )
}
export {sortingMethodObject}