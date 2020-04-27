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

        sideDrawerToggleHandler = () =>{
            this.setState((prevState) => {
                return { showSideDrawer: !prevState.showSideDrawer};
            });
        }

    render(){
        return(
            <Auxiliary>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
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