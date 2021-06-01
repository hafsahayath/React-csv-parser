import React,{ useState } from 'react'
import CSVReader from "react-csv-reader";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './TableComponent'
import HostInfo from './HostInfo'
import Chart from './Chart'

const ReportContainer = (props) => {
    const[fileData, setFileData] = useState([])
    const [host, setHost] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleForce = (data, fileInfo) => {
        setFileData(data, fileInfo);
    }

    const displayTable = (e) => {
        e.preventDefault('')
        const theHost = fileData.filter(ele=>ele.guest!=='Yes')
        setHost(...theHost)
        setSubmit(!submit)
    }

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    return (
        <div style={{margin:'10px', lineHeight:2}}>
            <form onSubmit={displayTable}>
                <div style={{display:'flex'}}>
                    <CSVReader
                        cssClass="react-csv-input"
                        onFileLoaded={handleForce}
                        parserOptions={papaparseOptions}
                    />
                    <input type="submit" value="Upload file"/>
                </div>
            </form>
            {
                fileData.length > 0 && submit && 
                <div>
                    <HostInfo host={host} fileData={fileData}/>
                    <div style={{display: 'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap', width:'100%'}}>
                        <TableComponent fileData={fileData}/>
                        <Chart fileData={fileData}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default ReportContainer
