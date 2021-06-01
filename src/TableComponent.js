import React from 'react'

const TableComponent = ({fileData}) => {
    return (
        <div style={{width:'50%'}}>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Duration</th>
                </tr>
            </thead>
            <tbody> 
                {fileData.map((ele,i)=>{
                    return (
                        <tr key={i}>
                            <td>{ele.name__original_name_}</td>
                            <td>{ele.user_email}</td>
                            <td>{ele.total_duration__minutes_}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default TableComponent
