import dataJson from "./mockData.json"
import calculatePoints from "../assets/calculatePoints"

export default function fakeFetch() {

    return new Promise((res) => {
         setTimeout(() => { 
                const dataJsonDateSorted = dataJson.sort(
                    (prevValue, nextValue) => { return (Date.parse(prevValue.purchaseDate) - Date.parse(nextValue.purchaseDate)) })
                    
                res(dataJsonDateSorted)
                
        }, 100)
    })
}