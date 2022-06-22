import "./table.scss"
import { DataGrid, GridColDef,GridRowProps  } from '@mui/x-data-grid';


const rows: GridRowProps = [
  { id: 1, lastName: 'Joshi', firstName: 'Atharva', D_O_B: "21 may 2001",position:"JDE Trainee" },
    { id: 2, lastName: 'Uplanchi', firstName: 'Manish', D_O_B: "28 may 2001",position:"JDE Trainee" },
    { id: 3, lastName: 'Salunkhe', firstName: 'Sanket', D_O_B: "28 feb 1995",position:"JDE Trainee" },
    { id: 4, lastName: 'Khadke', firstName: 'Aniket', D_O_B: "04 june 1995",position:"JDE Trainee" },
    { id: 5, lastName: 'Pal', firstName: 'Hemant', D_O_B: "19 April 2002",position:"JDE Trainee" },
    { id: 6, lastName: 'Prabhu', firstName: 'Vinayak', D_O_B: "14 nov 2000",position:"JDE Trainee" },
    { id: 7, lastName: 'Joshi', firstName: 'Atharva', D_O_B: "21 may 2001",position:"JDE Trainee" },
    { id: 8, lastName: 'Joshi', firstName: 'Atharva', D_O_B: "21 may 2001",position:"JDE Trainee" },
    { id: 9, lastName: 'Joshi', firstName: 'Atharva', D_O_B: "21 may 2001",position:"JDE Trainee"},
];


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 90 ,editable:true},
  { field: 'firstName', headerName: 'firstName', width: 130,editable:true },
  { field: 'lastName', headerName: 'lastName', width: 130,editable:true },
  {field:'D_O_B',headerName:"D_O_B", type: 'date',width:130,
  dateSetting: {
    format: 'dd/MM/yyyy'
  },},
  {field:'position',headerName:'postion',type:'text', width:130,editable:true}
   
  ];
 

const Table = () => {
    
  return (
    <div className="table">
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      
        
      />
    </div>
    </div>
  )
}

export default Table