import React from "react";

export default function CostTableRow({data, monthSet}){
  console.log(data)  
  const {userName, points} = data
  // Reduces all the the points to a total
    const totalRewardPoints = Object.values(points).reduce((prev, curr)=>curr+prev)  

    return(
      <tr>
      {console.log(points)}
          <th>{userName}</th>
          {
            monthSet?.map(
            (monthNumber)=><td key={"userName"+ monthNumber} >{points[monthNumber] || 0}</td> )
          } 
          <td>{totalRewardPoints}</td>
        </tr>
    )

}