import "../../assets/css/header/header.css"
import LOGO from '../../assets/imgs/arteLivreLogo.gif'
import MENU from '../../assets/imgs/menu.png'
import React from "react";
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "@mui/material";
import { Menu, MenuItem} from "@mui/material";
import IconButton from '@mui/material/IconButton';


function HeaderPag(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function resposive(){
                return (
                <div className="menu__responsive">
                    <IconButton
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                    <img className="menu__burguer" src={MENU} alt="" />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link underline="none" color="blue" variant="body1" href=""><MenuItem >News</MenuItem></Link>
                        <Link underline="none" color="blue" variant="body1" href=""><MenuItem >Livros</MenuItem></Link>
                        <Link underline="none" color="blue" variant="body1" href=""><MenuItem >Eventos</MenuItem></Link>
                        <Link underline="none" color="blue" variant="body1" href=""><MenuItem >Login</MenuItem></Link>
                    </Menu>
                </div>
            )
    }
    
    
    return( 
            <div className="header__container">
                <img className="header__logo" src={LOGO} alt="Logo"/>
                <ul className="header__list_links">
                    <Link underline="none" href="http://youtube.com"><li className="header_item__link">News <AnnouncementIcon></AnnouncementIcon></li></Link>
                    <Link underline="none" href=""><li className="header_item__link">Livros <MenuBookIcon></MenuBookIcon></li></Link>
                    <Link underline="none" href=""><li className="header_item__link">Eventos <EventNoteTwoToneIcon></EventNoteTwoToneIcon></li></Link>
                    <Link underline="none" href=""><li className="header_item__link">Login <LoginIcon></LoginIcon></li></Link>
                    
                </ul>
                {resposive()}
            </div>
    )
}

export default HeaderPag;