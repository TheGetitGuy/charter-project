

function getTotalPoints(objectOfPoints){ 
    return (Object.values(objectOfPoints)).reduce((prev, curr)=>prev + curr) 
}
function strToUpperInt(str){
    const singleLetter = str.toUpperCase() 
    return (
        singleLetter.charCodeAt(0)
    )
}
export function numericSort(arr){  
    return arr.sort((arrItem, arrItemNext) => {
        return (getTotalPoints(arrItemNext.points) - getTotalPoints(arrItem.points))
    }) 
}

export function alphabetSort(arr){  
    return arr.sort((arrItem, arrItemNext) => {
        return ((strToUpperInt(arrItem.userName)) - (strToUpperInt(arrItemNext.userName))) 
    }) 
}