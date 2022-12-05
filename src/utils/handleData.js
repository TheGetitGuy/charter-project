import calculatePoints from "./calculatePoints"

export default function handleData(dataToTransform) {
    const userObj = {}
    const monthsUsedSet = new Set()
    //this builds and returns the monthsUsed and the userObj
    dataToTransform.forEach(row => {
        const monthStr = new Date(row.purchaseDate).toLocaleString('en-US', { month: "short" });
        monthsUsedSet.add(monthStr)
        if (!userObj[row.userName]) { userObj[row.userName] = {userName:row.userName, totalPoints: 0}} ;//if no user, make one.
        if (!userObj[row.userName][monthStr]) { userObj[row.userName][monthStr] = 0 };//if no month entry, make one.
        userObj[row.userName].totalPoints += calculatePoints(+row.totalCost);
        userObj[row.userName][monthStr] += calculatePoints(+row.totalCost);
    })
    const monthsUsed = Array.from(monthsUsedSet)
    const userArr = Object.values(userObj)
    //console.log(`%cUser ${JSON.stringify(monthsUsed)}`, "color:red;")
     return {userArr, monthsUsed}
}





