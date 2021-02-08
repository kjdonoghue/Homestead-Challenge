import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'variety', headerName: 'Variety', width: 130 },
    { field: 'first_harvest', headerName: 'First Harvest', width: 130 },
    { field: 'last_harvest', headerName: 'Last Harvest', width: 130 },
    { field: 'harvest_amount', headerName: 'Total Harvest', width: 130 },
    { field: 'vendor', headerName: 'Vendor', width: 130 },
    { field: 'cost', headerName: 'Cost', width: 130 },    
    { field: 'notes', headerName: 'Notes', width: 130 },
];

const rows = [
    { id: 1, lastName: 'Snow', name: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', name: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', name: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', name: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', name: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', name: null, age: 150 },
    { id: 7, lastName: 'Clifford', name: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', name: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', name: 'Harvey', age: 65 },
];



function PerennialTracker() {


    return(
        <div>
        <h1>Perennials</h1>
        <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>
    )
}

export default PerennialTracker