import "../../assets/css/header/header.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LoginIcon from '@mui/icons-material/Login';
import MENU from '../../assets/imgs/menu.png'

 function MenuBurguer() {
  const [state, setState] = React.useState({
    right: false
  });



   function icon(index){
        switch(index){
           case 0:
           return <EventNoteTwoToneIcon fontSize="large" sx={{ color: 'rgb(50, 50, 170)'}}/> 
           case 1: 
           return <MenuBookIcon fontSize="large" sx={{ color: 'rgb(50, 50, 170)'}}/>
           case 2: 
           return <AnnouncementIcon fontSize="large" sx={{ color: 'rgb(50, 50, 170)'}}/>
           case 3: 
           return <LoginIcon fontSize="large" sx={{ color: 'rgb(50, 50, 170)'}}/>
           default:
           break;
        }
   }

   React.useEffect(()=>{
        function handleResize() {
            if(window.innerWidth >= 600 ){
                setState({right : false})
            }
        }   
        window.addEventListener('resize', handleResize)
   }, [])


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['News', 'Livros', 'Eventos', 'Login'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {icon(index)}
            </ListItemIcon>
            <h2>{text}</h2>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="menu_burguer">
      {['right'].map((anchor, index) => (
        <React.Fragment key={index}>
          <Button onClick={toggleDrawer(anchor, true)}><img className="menu__burguer_imagem" src={MENU} alt="" /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MenuBurguer;