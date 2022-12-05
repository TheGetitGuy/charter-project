import dataJson from "./mockData.json"
 
export default function fakeFetch() {

    return new Promise((res) => {
         setTimeout(() => { 
                res(dataJson)
        }, 200)
    })
}