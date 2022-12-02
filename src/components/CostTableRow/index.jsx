import React from "react";

export default function CostTableRow({ data, monthSet }) {
  const { totalPoints, userName } = data
  return (
    <tr>
      <th>{userName}</th>
      {
        monthSet?.map(
          (monthShort) => <td key={"userName" + monthShort} >{data[monthShort] || 0}</td>)
      }
      <td>{totalPoints}</td>
    </tr> 
  )

}