export default function calculatePoints(dataToAdd){
    let totalPoints = 0
    function calculateNewPoints(price){
        let workingPoints = 0
        if (price < 50){return 0}
        if (price < 100){
            return Math.floor(price - 50)
        } 
        if (price >= 100){
            workingPoints += 50
            workingPoints += ((price - 100) * 2)
            return Math.floor(workingPoints)
        }
    }
    return dataToAdd.map((currPurchase)=>{
        const newPoints = calculateNewPoints(currPurchase.totalCost)
        const rewardPoints = +newPoints 
        const totalRewardPoints = +newPoints + +totalPoints 
        totalPoints += calculateNewPoints(+currPurchase.totalCost) 
        return({...currPurchase, rewardPoints:rewardPoints, totalRewardPoints: totalRewardPoints })
    })


}