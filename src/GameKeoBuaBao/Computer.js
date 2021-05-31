import React, { Component } from 'react'
import style from '../assets/styles/components/GameKeoBuaBao.module.css'
import {connect} from 'react-redux'

 class Computer extends Component {
    render() {
        return (
            <div className={`${style.playerGame}`}>
                <div className={`${style.boxWhite}`}>
                    <img style={{ width: 100, height: 100, transform: 'rotate(120deg' }} src={this.props.computer.hinhAnh} />
                </div>
                <div className={`${style.speechBbubble}`}></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="player " />
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        computer : state.gameKeoBuaBaoReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)