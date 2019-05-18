import React from 'react';
import {withRouter} from '../react-router-dom';
class NavHeader extends React.Component{
    render(){
        console.log('NavHeader',this.props);
        return (
            <div className="navbar-heading">
               <div onClick={()=>this.props.history.push('/')} className="navbar-brand">简易版路由实现</div>
            </div>
        )
    }
}
export default withRouter(NavHeader);