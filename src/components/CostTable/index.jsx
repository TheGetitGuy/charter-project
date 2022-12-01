import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../assets/fakeFetch" 
import calculatePoints from "../../assets/calculatePoints"


export default function CostTable( ) { 
    const [testData, setTestData] = useState(null) 

    useEffect(() => { 
        fakeFetch()
            .then((res) => res)
            .then((res) => {   
                const users = new Set();
                console.log(res)
                res.forEach(dataEntry => {
                    users.add(dataEntry.userName) 
                });
                const mappedData = Array.from(users.values).map((currentName)=>{
                    const getMonthPoints = (monthToFilter)=>res.reduce((currEntry, currentTotal)=>{
                        if(currEntry.userName === currentName && currEntry.purchaseDate.split('-')[1] == monthToFilter){
                            console.log(currEntry)
                            currentTotal += calculatePoints(currEntry.totalCost)
                        }
                    })
                    return([currentName] = {
                        sepPoints: getMonthPoints(9),
                        octPoints: getMonthPoints(10),
                        novPoints: getMonthPoints(11),
                        totalPoints: getMonthPoints(9) + getMonthPoints(10) + getMonthPoints(11)
                    })
                }) 
                setTestData(mappedData)
                
            })
    }, [])

    if (testData === null) {
        return <div> ..Loading.. </div>
    }
    
    return (
        <>
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