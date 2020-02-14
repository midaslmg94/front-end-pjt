import React from 'react';
import './MainTemplate.css';
import MainNavbar from './MainNavbar';

class MainTemplate extends React.Component {
    render () {
        return (
            <>
                <header>
                    <h1>
                        <img width="100px"src="/로고.png" alt="Win:G"/>
                    </h1>
                </header>
                <nav className="menu">
                    <ul>
                       <MainNavbar/>                       
                    </ul>
                </nav>
               
            </>
        );
    }
}
export default MainTemplate;