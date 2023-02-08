import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Navbar/Navbar.css'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className='drawerNavbar'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img  src='https://spaalon.com/images/SpaalonLogoRed.jpg'/>
            <p>Hair<i class="fa-solid fa-arrow-right"></i></p>
            <p>Body<i class="fa-solid fa-arrow-right"></i></p>
            <p>Spa<i class="fa-solid fa-arrow-right"></i></p>
            <p>Nail<i class="fa-solid fa-arrow-right"></i></p>
            <p>Face<i class="fa-solid fa-arrow-right"></i></p>

        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
                    <Drawer
                        className='drawerMaterialUI'
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