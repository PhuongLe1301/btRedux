import React, { Component } from 'react'
import {connect} from 'react-redux'

 class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="text-center container">
            <div className="display-4 ">
            <h3 className="display-4 pt-5" style={{color:'orange'}}>{this.props.ketQua}</h3>
                <div className="text-success">Số bàn thắng:<span className="text-warning">{this.props.soBanThang}</span></div>
            </div>
            <div className="display-4 mt-4">
                <div className="text-success">Số bàn chơi:<span className="text-warning">{this.props.soBanChoi}</span></div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ketQua: state.gameKeoBuaBaoReducer.ketQua,
        soBanThang : state.gameKeoBuaBaoReducer.soBanThang,
        soBanChoi : state.gameKeoBuaBaoReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)