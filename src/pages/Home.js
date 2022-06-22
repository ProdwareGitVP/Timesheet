
import Sidebar from '../component/Sidebar/Sidebar'
import Navbar from '../component/Navbar/Navbar'
import './home.scss'
import Widget from '../component/widget/Widget'
import Table from '../component/table/Table'
import Button from '@mui/material/Button';
//import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
//import DeleteIcon from '@mui/icons-material/Delete';


function  Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        <div className='widgets'>
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
        <div className='listcontainer'>
          <div className='listtitle'>Employee
           <Button variant='contained' ><AddIcon className='icon'/>NEW</Button>
          </div>
          <Table/>

        </div>
        
      </div>
    </div>
  )
}

export default  Home