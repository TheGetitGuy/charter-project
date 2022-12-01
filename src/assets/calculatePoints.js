export default function calculateNewPoints(price){
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