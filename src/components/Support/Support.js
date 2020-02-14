import React, {Component} from 'react';
import MainBar from './MainBar';
import SideBar from './SideBar';
import SupportCard from './SupportCard';
import './Support.css';

class Support extends Component {
    render() {
        return (
            <div>
                <MainBar/>
                <div className="Align">
                    <SideBar/>
                    <SupportCard/>
                </div>
            </div>
        );
    }
}

export default Support;