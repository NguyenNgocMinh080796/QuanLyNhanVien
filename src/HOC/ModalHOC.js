import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { CANCEL_MODAL, OK_MODAL } from '../redux/type/ModalType';

export default function ModalHOC() {
    const dispatch = useDispatch()
    const { isModalOpen, componentModal } = useSelector(state => state.ModalReducer)

    const handleOk = () => {
        dispatch({ type: OK_MODAL })
    };
    const handleCancel = () => {
        dispatch({ type: CANCEL_MODAL })
    };

    return (
        <>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer=''>
                {componentModal}
            </Modal>
        </>
    )
}
