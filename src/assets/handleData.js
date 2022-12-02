import calculatePoints from "./calculatePoints"

export default function handleData(dataToTransform){
    const finalObject = []
    const setOfNames = new Set(dataToTransform.map((item)=>item.userName))
    const dataSorted = dataToTransform.sort((currEntry, nextEntry)=>{
        return(Date.parse(nextEntry.purchaseDate) - Date.parse(currEntry.purchaseDate))
    })
    setOfNames.forEach((entryValue)=>{
        const points = {} 
        points[entryValue] = (dataSorted.reduce((totalPoints, dataEntry)=>{ 
            
            const returnPoints = (totalPoints + calculatePoints(+dataEntry.totalCost))
            return returnPoints
        },0)) 

        finalObject.push({
            userName: entryValue,
            points: points[entryValue]
        })
    }) 
    return finalObject
}
    
    



