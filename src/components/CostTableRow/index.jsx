import React from "react";

export default function CostTableRow(props){
    const data = props
    const dateObjectDate = new Date(Date.parse(data.purchaseDate))
    return(
        <tr>
          <th>{data.userName}</th>
          <td>{data.sepPoints}</td>
          <td>{data.novPoints}</td>
          <td>{data.octPoints}</td>
          <td>{data.totalRewardPoints}</td>
        </tr>
    )

}