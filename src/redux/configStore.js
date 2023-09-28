import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ModalReducer } from './reducer/ModalReducer'
import { NhanVienReducer } from './reducer/NhanVienReducer'
import { SinhVienReducer } from './reducer/SinhVienReducer'

const rootReducer = combineReducers({
    ModalReducer: ModalReducer,

    NhanVienReducer: NhanVienReducer,
    SinhVienReducer: SinhVienReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))