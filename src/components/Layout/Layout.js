import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer:true
    }

        sideDraweClosedHandler = () =>{
            this.setState({showSideDrawer:false});
        }

    render(){
        return(
            <Auxiliary>
    <Toolbar/>
    <SideDrawer
     open={this.state.showSideDrawer} 
     closed={this.sideDraweClosedHandler}/>
     
    <main className={classes.content}>
        {this.props.children}
    </main>
    </Auxiliary>
        )
    }
}
 export default Layout;