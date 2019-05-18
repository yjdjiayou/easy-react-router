import React from 'react';
import {Route,Redirect} from '../react-router-dom';
//rest = {path:profile,exact:true}
//这里为什么要用 render ，而不是直接用 Component ？
//因为这里需要逻辑判断，是否是已登录状态，根据不同的状态跳转不同的路由，
//直接用 Component 是无法实现的
//为什么这里需要用到 Route ？
//因为这里需要用到路由的路径匹配
export default function({component:Component,...rest}){
  return (
      <Route {...rest} render={
          props=>localStorage.getItem('login')?<Component {...props}/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
      }/>
  )
}