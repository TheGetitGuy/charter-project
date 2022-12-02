import dataJson from "./mockData.json"
 
export default function fakeFetch() {

    return new Promise((res) => {
         setTimeout(() => { 
                const dataJsonDateSorted = dataJson.sort(
                    (prevValue, nextValue) => { return (Date.parse(prevValue.purchaseDate) - Date.parse(nextValue.purchaseDate)) })
                    
                res(dataJsonDateSorted)
                
        }, 200)
    })
}