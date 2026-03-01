import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { BiUser } from 'react-icons/bi';
import { FaShoppingCart, FaUserShield } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BackDrop from './BackDrop';
import { logOutUser } from '../store/actions';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAdmin = user && user?.roles.includes("ROLE_ADMIN");
    const isSeller = user && user?.roles.includes("ROLE_SELLER");

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOutHandler = () => {
        dispatch(logOutUser(navigate));
      };
  
    return (
      <div className='relative z-30'>
        <div
        className='flex flex-row items-center gap-2 cursor-pointer group'
          onClick={handleClick}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <Avatar 
                alt={user?.username} 
                src='' 
                sx={{ bgcolor: 'transparent' }}
                className="text-white font-bold"
            >
                {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
          </div>
          <span className="text-white font-medium hidden lg:block group-hover:text-purple-400 transition-colors">
            {user?.username}
          </span>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
                bgcolor: '#1a1a2e',
                border: '1px solid rgba(126, 34, 206, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                borderRadius: '12px',
                minWidth: '200px',
                mt: 1
            }
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            sx: { p: 1 },
          }}
        >
          <Link to="/profile">
            <MenuItem 
                onClick={handleClose}
                className="flex gap-3 rounded-lg mb-1 hover:bg-purple-500/20 transition-colors"
            >
                <BiUser className='text-xl text-purple-400'/>
                <span className='font-semibold text-gray-200'>
                    {user?.username}
                </span>
            </MenuItem>
          </Link>

          <Link to="/profile/orders">
            <MenuItem 
                onClick={handleClose}
                className="flex gap-3 rounded-lg mb-1 hover:bg-purple-500/20 transition-colors"
            >
                <FaShoppingCart className='text-lg text-purple-400'/>
                <span className='font-semibold text-gray-200'>
                    Orders
                </span>
            </MenuItem>
          </Link>

          { (isAdmin || isSeller) && (
          <Link to={isAdmin ? "/admin" : "/admin/orders"}>
            <MenuItem 
                onClick={handleClose}
                className="flex gap-3 rounded-lg mb-1 hover:bg-purple-500/20 transition-colors"
            >
                <FaUserShield className='text-lg text-purple-400'/>
                <span className='font-semibold text-gray-200'>
                    {isAdmin ? "Admin Panel" : "Seller Panel"}
                </span>
            </MenuItem>
          </Link>)}

            <div className="my-2 border-t border-white/10"></div>

            <MenuItem 
                onClick={logOutHandler}
                className="flex gap-3 rounded-lg hover:bg-rose-500/20 transition-colors"
            >
                <IoExitOutline className='text-xl text-rose-400'/>
                <span className='font-semibold text-rose-400'>
                    LogOut
                </span>
            </MenuItem>

        </Menu>

        {open && <BackDrop />}
      </div>
    );
}

export default UserMenu
