import React from "react";
import AppFooter from "./footer";
import AppHeader from "./header";

export default class AppLayout extends React.Component{
    public render(){
        return(
            <div>
                <AppHeader/>
                {this.props.children}
                <AppFooter/>
            </div>
        );
    }
}