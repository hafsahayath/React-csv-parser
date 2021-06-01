import React from 'react'

const HostInfo = ({host, fileData}) => {

    const totalMins = host.total_duration__minutes_

    return (
        <div style={{display:'flex', flexDirection:'column', paddingTop:'20px'}}>
            <h2>Report</h2>
            <h3>Host - <span style={{color:'#4285F4'}}>{host.name__original_name_}</span></h3>
            <h4>Total Participants - {fileData.length}</h4>
            <h4>Duration - {`${totalMins} minutes (${Math.floor(totalMins/60)} hour ${totalMins%60} minutes)`}</h4>
        </div>
    )
}

export default HostInfo
