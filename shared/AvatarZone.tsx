import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function AvatarZone({ user, classNameAvt = '', menuId = '' }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const userFullName = user.fullName;
    const firstLetterName = userFullName.charAt(userFullName.lastIndexOf(' ') + 1);
    const handleLogout = () => {
        localStorage.removeItem('buildify-token');
        window.location.href = '/';
    };
    const goToDashboard = () => {
        window.location.href = '/dashboard';
    }
    const goToProfile = () => {
        window.location.href = '/admin/profile';
    }
    return (
        <div className={classNameAvt}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <div className='flex ml-10 items-center'>
                    <span className='fs-sm font-medium name'><span className='text-blue-700 fs-sm'>{userFullName}</span></span>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar >{firstLetterName}</Avatar>
                        </IconButton>
                    </Tooltip>

                </div>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id={`${menuId}`}
                className="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                disableScrollLock
            >
                <MenuItem href='/dashboard' onClick={goToDashboard}>
                    <ListItemIcon>
                        <DashboardIcon fontSize="medium" />
                    </ListItemIcon>
                    Dashboard
                </MenuItem>
                <MenuItem href='profile' onClick={goToProfile}>
                    <ListItemIcon>
                        <AccountBoxIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>

                <Divider style={{ marginTop: 4, marginBottom: 4 }} />

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}
