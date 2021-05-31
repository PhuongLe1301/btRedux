

const stateDefaultGame = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, i love you 3000 !!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' }
}

const gameKeoBuaBaoReducer = (state = stateDefaultGame, action) => {

    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state }

            console.log(action);
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = quanCuocNgauNhien;
            return { ...state }
        }
        case 'END_GAME': {
            state.soBanChoi +=1
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hoà'
                    }
                    else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua'
                    }
                    else{
                        state.ketQua = "I'm iron man, i love you 3000 !!"
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'Hoà'
                    }
                    else if (computer.ma === 'bao') {
                        state.ketQua = 'Thua'
                    }
                    else {
                        state.ketQua = "I'm iron man, i love you 3000 !!"
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'Hoà'
                    }
                    else if (computer.ma === 'keo') {
                        state.ketQua = 'Thua'
                    }
                    else{
                        state.ketQua = "I'm iron man, i love you 3000 !!"
                    }
                    break;
                default: state.ketQua = "I'm iron man, i love you 3000 !!";
            }
            if(state.ketQua ==="I'm iron man, i love you 3000 !!"){
                state.soBanThang +=1;
            }
            return { ...state }
        }
        default: return { ...state }
    }
}

export default gameKeoBuaBaoReducer;