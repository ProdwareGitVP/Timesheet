import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar } from '@mui/material';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='search....'/>
          <SearchIcon className='icon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon'/>

          </div>
          <div className='item'>
            <NotificationsIcon className='icon'/>

          </div>
          <div className='item'>
            <ChatIcon className='icon'/>

          </div>
          <div className='item'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar" />

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar