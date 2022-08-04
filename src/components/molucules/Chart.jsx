import React from 'react'
import { Line } from "react-chartjs-2";

export const Chart = () => {
    return (
        <div>
        <Line
        height={300}
        width={300}
        id="chart-key"
      />
        </div>
    )
}
