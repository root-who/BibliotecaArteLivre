import "../../assets/css/header/header.css"
import LOGO from '../../assets/imgs/arteLivreLogo.gif'

import React from "react";
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "@mui/material";

import MenuBurguer from "./menuBurguer";


function HeaderPag(){


    function resposive(){
                return (
                <div className="menu__responsive">
                    <MenuBurguer/>
                    
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