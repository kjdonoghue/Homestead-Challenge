import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'variety', headerName: 'Variety', width: 130 },
    { field: 'family', headerName: 'Family', width: 130 },
    { field: 'started_from', headerName: 'Started From', width: 130 },
    { field: 'start_date', headerName: 'Date Planted', width: 130 },
    { field: 'first_harvest', headerName: 'First Harvest', width: 130 },
    { field: 'last_harvest', headerName: 'Last Harvest', width: 130 },
    { field: 'harvest_amount', headerName: 'Total Harvest', width: 130 },
    { field: 'vendor', headerName: 'Vendor', width: 130 },
    { field: 'cost', headerName: 'Cost', width: 130 },    
    { field: 'notes', headerName: 'Notes', width: 130 },
  
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function VegetableTracker() {


    return (
        <div>
            <h1>Vegetable Tracker</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>







        </div>
    )
}

export default VegetableTracker