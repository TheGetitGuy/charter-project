import dataJson from "../assets/MOCK_DATA.json"
import calculatePoints from "../assets/calculatePoints"

export default function fakeFetch(startIndex, lastListedIndex) {
    return new Promise((res) => {
        setTimeout(() => {
            if (lastListedIndex === -1) {
                lastListedIndex = dataJson.length
            }
            const dataJsonWithPoints = calculatePoints(dataJson.sort(
                (prevValue, nextValue) => { return (Date.parse(prevValue.purchaseDate) - Date.parse(nextValue.purchaseDate)) }))
            res(dataJsonWithPoints)
        }, 100)
    })
}