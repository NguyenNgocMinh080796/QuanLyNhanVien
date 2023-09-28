import { CANCEL_MODAL, OK_MODAL, SHOW_MODAL } from "../type/ModalType"

const initialState = {
    isModalOpen: false,
    componentModal: <p>Component default</p>,
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            return { ...state, isModalOpen: true, componentModal: action.componentAction }
        }
        case OK_MODAL: {
            return { ...state, isModalOpen: false }
        }
        case CANCEL_MODAL: {
            return { ...state, isModalOpen: false }
        }
        default:
            return { ...state }
    }
}
