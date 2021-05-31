import React, { Component } from 'react'
import style from '../assets/styles/components/GameKeoBuaBao.module.css'
import {connect} from 'react-redux'

 class Player extends Component {
    render() {
        return (
            <div className={`${style.playerGame}`}>
                <div className={`${style.boxWhite}`}>
                    <img style={{ width: 100, height: 100, transform: 'rotate(120deg' }} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} />
                </div>
                <div className={`${style.speechBbubble}`}></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player " />
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index)=>{

                        let border = {};
                        if(item.datCuoc){
                            border= {border:'3px solid orange'};
                        }

                        return <div className="col-4">
                        <button onClick={()=>{
                            this.props.datCuoc(item.ma)
                        }} style={border} className={`${style.btnItem}`}>
                            <img style={{ width: 35, height: 35 }} src={item.hinhAnh} />
                        </button>

                    </div>
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        mangDatCuoc: state.gameKeoBuaBaoReducer.mangDatCuoc
    }
}
const mapDispatchToProp = dispatch =>{
    return{
        datCuoc:(maCuoc)=>{
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Player)