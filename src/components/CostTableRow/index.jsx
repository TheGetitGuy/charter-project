import React from "react";

export default function CostTableRow(props){
    const {data={name:"N/A",totalCost:"N/A",purchaseDate:"N/A"}} = props
    const dateObjectDate = new Date(Date.parse(data.purchaseDate))
    return(
        <tr>
          <th>{data.name}</th>
          <td>{data.totalCost}</td>
          <td>{dateObjectDate.toLocaleString('en-US')}</td>
          <td>{data.rewardPoints}</td>
          <td>{data.totalRewardPoints}</td>
        </tr>
    )

}