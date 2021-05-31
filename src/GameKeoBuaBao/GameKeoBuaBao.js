import React, { Component } from 'react'
import style from '../assets/styles/components/GameKeoBuaBao.module.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import {connect} from 'react-redux'

 class GameKeoBuaBao extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
                <div className="row">
                <div className="col-4">
                    <Player/>
                </div>
                <div className="col-4">
                    
                    <KetQuaTroChoi/>
                    <button className="btn btn-success" onClick={()=>{
                        {this.props.playGame()}
                    }}><span className="p-2">Play Game</span></button>
                </div>
                <div className="col-4">
                    <Computer/>
                </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProp = (dispatch) =>{
    return {
        playGame: ()=>{
            dispatch({
                type: 'RAN_DOM'
            })
            dispatch({
                type: 'END_GAME'
            })
        }
    }
}

export default connect(null,mapDispatchToProp)(GameKeoBuaBao)