


function strToUpperInt(str){
    const singleLetter = str.toUpperCase() 
    return (
        singleLetter.charCodeAt(0)
    )
}
export function numericSort(obj){  
    const objValueArr = Object.values(obj)
    return objValueArr.sort((arrItem, arrItemNext) => {
        return (arrItemNext.totalPoints - arrItem.totalPoints)
    })
} 


export function alphabetSort(obj){  
    const objValueArr = Object.values(obj) 
    return objValueArr.sort((arrItem, arrItemNext) => {
        return ((strToUpperInt(arrItem.userName)) - (strToUpperInt(arrItemNext.userName))) 
    }) 
}