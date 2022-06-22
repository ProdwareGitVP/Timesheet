
import './Sidebar.scss'
import  image  from '../../images/image.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {

  return (
    <div className='Sidebar'>
        <div className='top'>
            <img src={image} alt="logo" />
          

        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>Dashboard</p>
                <li>
                <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p  className='title'>User</p>
                <li>
                <PersonIcon className='icon'/>
                    <span>User</span>
                </li>
                <p className='title'>Timesheet</p>
                <li>
                <AccessTimeIcon className='icon'/>
                    <span>Timesheet</span>
                </li>
                <p className='title'>settings</p>
                <li>
                <ExitToAppIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>

        </div>
        <div className='bottom'>
            
            <div className='coloroption'></div>
            <div className='coloroption'></div>
            <div className='coloroption'></div>
        </div>
    </div>
  )
}

export default Sidebar