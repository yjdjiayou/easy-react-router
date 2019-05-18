import React from 'react';
import RouterContext from './context';
export default class Prompt extends React.Component{
    static contextType = RouterContext
    componentWillUnmount(){
        this.context.history.block(null);
    }
    render(){
         let history = this.context.history;//从上下文中获取历史对象
         const {when,message} = this.props;
        //when 为真的时候要阻挡用户，但是什么时候阻挡尼？
        if(when){
            //应该在要跳转别的路由之前阻挡，路由跳转都是通过 history.push
            //所以这里需要将值传给 history ，然后在 history.push 方法中判断
             history.block(message);
         }else{
             history.block(null);
         }
        return null;
    }
}