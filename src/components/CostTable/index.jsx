import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../mock/fakeFetch" 
import handleData from "../../utils/handleData" 
import { numericSort, alphabetSort } from "../../utils/sortingFunctions"  
const sortingMethodObject = {
    "default": (s)=>Object.values(s),
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
        .then((res)=>{
            const {userArr, monthsUsed} = handleData(res)
            setTestData(userArr)
            setMonthSet(monthsUsed) 
        })
    },[sortingMethod])

  
    //loading render if fetch hasn't returned
    if (testData.length < 1) {
        return <table className={styles.table}> <tr><tbody><td > ..Loading.. </td></tbody></tr></table>
    }

    function renderFunction(){
        //render Function for the rows.
        return (sortingMethodObject[sortingMethod](testData))
        .map((data, index) => <CostTableRow key={"costTable" + index} monthSet={monthSet} data={data}></CostTableRow>)
    }
    return (
        <>       
       
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th> 
                        {monthSet.map((monthToPrint)=>{ 
                            //create headers dynamically of all months used
                            return <th key={monthToPrint}>{monthToPrint}</th>
                        })}
                        <th> Total-Points </th>
                    </tr>
                </thead>
                <tbody>
                    {renderFunction()}
                </tbody>
            </table> 
        </>
    )
}
export {sortingMethodObject}