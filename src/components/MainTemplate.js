import React from 'react';
import './MainTemplate.css';

class MainTemplate extends React.Component {
    render () {
        return (
            <>
                <header>
                    <h1>Win:G</h1>
                </header>
                <nav className="menu">
                    <ul>
                        <li><a href="#tab1">Home</a></li>
                        <li><a href="#tab2">Streaming</a></li>
                        <li><a href="#tab3">Live</a></li>
                        <li><a href="#tab4">Support</a></li>
                        <li><a href="#tab5">Concert</a></li>
                    </ul>
                </nav>
            </>
        );
    }
}
export default MainTemplate;