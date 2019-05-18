import React from 'react';
import {Route, Link} from '../react-router-dom';
import './MenuLink.css'
//为什么这里需要用到 Route ？
//因为这里需要用到路由的路径匹配

//这个菜单相对于Link多了一个功能，如果当前地址栏中的路径和自己匹配的话，则加一个背景色

//Route ：要想指定渲染的内容有三种方式 component render children
//一般情况下，使用 component 或 render，多个同级路由（Route 组件）中，只有在路径匹配上的时候才会渲染该路由，否则不渲染
//而使用 children ，不管路径匹配不匹配，都会渲染路由
//虽然使用 children ，不管路径匹配不匹配，都会渲染路由
//但是 match 的结果只有匹配到了路由才有值，否则为 null
//console.log(props);

export default function ({to, exact, children}) {
    return (
        <Route path={to} exact={exact} children={
            props => {
                return <Link className={props.match ? 'active' : ''} to={to}>{children}</Link>;
            }
        }/>
    )
}