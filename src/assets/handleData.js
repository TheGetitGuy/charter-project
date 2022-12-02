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
            if (entryValue !== dataEntry.userName){return totalPoints}
            const currMonth = (dataEntry.purchaseDate.split("-")[1]) 
            const returnPoints = {...totalPoints, [currMonth]:((totalPoints[currMonth] || 0) + calculatePoints(+dataEntry.totalCost))}
        
            return returnPoints
        },{})) 

        finalObject.push(entryValue = {
            userName: entryValue,
            points: points[entryValue]
        })
    }) 
    return finalObject
}
    
    



