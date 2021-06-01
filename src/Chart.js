import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = ({fileData}) => {

    const data = fileData.filter(ele=>ele.guest==='Yes')


    const minutes = []
    data.filter(ele=>{
        minutes.push(ele.total_duration__minutes_)
    })

    const min = Math.min(...minutes)
    const max = Math.max(...minutes)

    const domainValues = [min, max]

    const tickValues = []
    for(let i=min-5; i <= max+5; i++){
        tickValues.push(i)
    }

    console.log(data)


    return (
        <div style={{margin:'0 auto', width:'50%', padding:'20px'}}>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name__original_name_" stroke="#8884d8" interval={0}/>
                <YAxis ticks={tickValues} 
                domain={domainValues}/>
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total_duration__minutes_" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    )
}

export default Chart
