import React, { useEffect, useState } from "react"
import styles from "./CostTable.module.css"
import CostTableRow from "../CostTableRow"
import fakeFetch from "../../assets/fakeFetch" 


export default function CostTable(props) {
    const {size=10, startIndex = 0, userName} = props
    const [testData, setTestData] = useState(null)
    const [currentPurchaseIndex, setPurchaseIndex]=useState(startIndex)

    function handleClick(amountToChange){
        setPurchaseIndex((prevI)=>{
          const pendingCount = (prevI + amountToChange)
          if (pendingCount < 0){
            return prevI = 0
          } 
          return prevI = pendingCount
        })
      }
    
    useEffect(() => { 
        fakeFetch(userName)
            .then((res) => res)
            .then((res) => {
                 let endIndex = res.length
                 let currEndIndex = (currentPurchaseIndex + size)
                 let nextStartIndex = currentPurchaseIndex
                 if (currEndIndex > endIndex) {
                    nextStartIndex = (endIndex - size)
                    setPurchaseIndex(nextStartIndex)
                }

                 setTestData(res.slice(nextStartIndex, currEndIndex))
                

            })
    }, [currentPurchaseIndex, userName])

    if (testData === null) {
        return <div> ..Loading.. </div>
    }
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th> Cost </th>
                        <th> Date </th>
                        <th> Earned-Points </th>
                        <th> Total-Points </th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((data, index) => <CostTableRow key={data.purchaseDate + "costTable" + index} data={data}></CostTableRow>)}
                </tbody>
            </table>
            <button onClick={() => { handleClick(-size) }}>{"<-"}</button>
            <button onClick={() => { handleClick(size) }}>{"->"}</button>
        </>
    )
}