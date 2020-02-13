import React from 'react'
import Pagi from './Pagi.js'
import './Chart.css'
import ChartMenuList from './ChartMenuList.js'

class Chart extends React.Component {
    render() {
        return (
            <>
                <div className="Logo"><img src="logo.png" alt="top logo"></img></div>
                
                <div className="ChartMenuTitle">
                    <img src="wing.png" alt="menu wing logo"></img>
                    <p>&nbsp;추천 노래</p>
                    <p className="ChartMenuList"><ChartMenuList /></p>
                    <p>&nbsp;인기 차트</p>
                    <p>&nbsp;신곡</p>
                </div>
                
                <div className="ChartList">
                    <p className="Album">앨범 커버 들어갈 곳</p>
                    
                </div>
                <div className="Pagi"><Pagi /></div>


            </>
        )
    }
}

export default Chart