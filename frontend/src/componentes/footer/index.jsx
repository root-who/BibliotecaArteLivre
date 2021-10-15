import React from "react";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LOGO from '../../assets/imgs/arteLivreBrancoFundoTransMenor.png'
import { Link } from "@mui/material";
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';
import AnnouncementIcon from '@mui/icons-material/Announcement'
import "../../assets/css/footer/footer.css"

function FooterPag(){
    return(
        <>
            <div className="footer__container">
                    <img className="footer__img" src={LOGO} alt="" />
                    <ul className="footer__list__links">
                        <Link underline="none" href="http://youtube.com"><li className="footer_item__link">News <AnnouncementIcon></AnnouncementIcon></li></Link>
                        <Link underline="none" href=""><li className="footer_item__link">Livros <MenuBookIcon></MenuBookIcon></li></Link>
                        <Link underline="none" href=""><li className="footer_item__link">Eventos <EventNoteTwoToneIcon></EventNoteTwoToneIcon></li></Link>
                        <Link underline="none" href=""><li className="footer_item__link">Contate-nos<ContactSupportIcon></ContactSupportIcon></li></Link>
                        <Link underline="none" href=""><li className="footer_item__link">Sobre nós <InfoIcon></InfoIcon></li></Link>
                    </ul>
            
            </div>

        </>
    )
}

export default FooterPag;