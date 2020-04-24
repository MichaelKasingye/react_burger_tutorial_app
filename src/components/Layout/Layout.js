import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Auxiliary>
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.content}>
        {props.children}
    </main>
    </Auxiliary>
);
 export default layout;