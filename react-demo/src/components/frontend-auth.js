import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class FrontendAuth extends React.Component{
    render(){
       const { location, config } = this.props;
       const pathname = location.pathname;
       const isLogin = false;

       const targetRouterConfig = config.find(item => item.path === pathname);

       if(!isLogin){
         if(!targetRouterConfig){
           return <Redirect to="/404" />
         }

         if(!targetRouterConfig.auth){
           return <Route path={ targetRouterConfig.path } component={ targetRouterConfig.component } />
         }else{
           return <Redirect to="/Login" />
         }
       }

    }
}