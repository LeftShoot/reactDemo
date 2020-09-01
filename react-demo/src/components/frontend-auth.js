import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class FrontendAuth extends React.Component{
    render(){
       const { location, config } = this.props;

       const targetRouterConfig = config[1];
       return <Route path={ targetRouterConfig.path } component={targetRouterConfig.component } />
    //   return <Redirect to='/404' />
    }
}