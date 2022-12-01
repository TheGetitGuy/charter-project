import originalDataJson from "../assets/MOCK_DATA.json"
import calculatePoints from "../assets/calculatePoints"

export default function fakeFetch(userName = "") {
    const dataJson = originalDataJson.filter((item)=>{
            if(userName !== ""){
                return(item.userName === userName)
            }
            else return true
        })
    return new Promise((res) => {
        setTimeout(() => { 
            const dataJsonWithPoints = calculatePoints(dataJson.sort(
                (prevValue, nextValue) => { return (Date.parse(prevValue.purchaseDate) - Date.parse(nextValue.purchaseDate)) }))
                res(dataJsonWithPoints)
        }, 100)
    })
}