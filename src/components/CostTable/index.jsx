import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../assets/fakeFetch" 
import handleData from "../../assets/handleData"

export default function CostTable( ) { 
    const [testData, setTestData] = useState(null) 


    useEffect( ()=>{
        fakeFetch()
        .then((res)=>{return res})
        .then((res)=>{setTestData(handleData(res))})
        
    },[])

    if (testData === null) {
        return <div> ..Loading.. </div>
    }
    
    return (
        <>
        {console.log(testData)}        
       
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th> September </th>
                        <th> October </th>
                        <th> November </th>
                        <th> Total-Points </th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((data, index) => <CostTableRow key={"costTable" + index} data={data}></CostTableRow>)}
                </tbody>
            </table> 
        </>
    )
}