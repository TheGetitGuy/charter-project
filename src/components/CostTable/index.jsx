import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../assets/fakeFetch" 
import handleData from "../../assets/handleData"
import numToStringMonthMap from "../../assets/numToMonth.json"

export default function CostTable( ) { 
    const [testData, setTestData] = useState([])
    const [monthSet, setMonthSet] = useState(null)


    useEffect( ()=>{
        fakeFetch()
        .then((res)=>{return res})
        .then((res)=>{setTestData(handleData(res))})
    },[])
    useEffect(()=>{ 
            const workingSet = new Set(testData.map((entry)=>{
                return Array.from(Object.keys(entry.points))
            }).flat())
            console.log(workingSet)
            setMonthSet(Array.from(workingSet).sort())
    },[testData])

    if (testData.length < 1) {
        return <div> ..Loading.. </div>
    }
    
    return (
        <>
        {console.log(testData)}        
       
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th> 
                        {monthSet ? monthSet.map((monthToPrint)=>{ 
                            //create headers dynamically of all months used
                            return <th>{numToStringMonthMap[monthToPrint]}</th>
                        }):null}
                        <th> Total-Points </th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((data, index) => <CostTableRow key={"costTable" + index} monthSet={monthSet} data={data}></CostTableRow>)}
                </tbody>
            </table> 
        </>
    )
}