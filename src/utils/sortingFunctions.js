


function strToUpperInt(str){
    const singleLetter = str.toUpperCase() 
    return (
        singleLetter.charCodeAt(0)
    )
}
export function numericSort(objValueArr){  
    return objValueArr.sort((arrItem, arrItemNext) => {
        return (arrItemNext.totalPoints - arrItem.totalPoints)
    })
} 


export function alphabetSort(objValueArr){   
    return objValueArr.sort((arrItem, arrItemNext) => {
        return ((strToUpperInt(arrItem.userName)) - (strToUpperInt(arrItemNext.userName))) 
    }) 
}