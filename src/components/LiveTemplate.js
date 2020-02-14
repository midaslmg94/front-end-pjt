import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MenuTab from './LiveTemplateComponent/MenuTab';  
import Page from './LiveTemplateComponent/Page';
import './LiveTemplate.css';
import SideBar from './LiveTemplateComponent/SideBar';
import LiveList from './LiveTemplateComponent/LiveList';

class  LiveTemplate extends React.Component{

    render(){
    return (
        <>
            <div className = "Center">
                <div className="SideBar">
                    <img src="/wing.png"></img>
                    <SideBar></SideBar>
                </div>
                
                <div className="LiveList">
                    <LiveList></LiveList>
                </div>
            </div>
            <p></p>
            <div className="Page"><Page></Page></div>
        </>
    ) 
  }; 
}
        
export default LiveTemplate; 