import React, { useEffect } from 'react';
import { Button, Space, Table, message, Popconfirm, Card, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_MODAL } from '../../redux/type/ModalType';
import DetailSinhVienComponent from '../QuanLySinhVien/DetailSinhVienComponent';
import { LayDanhSachSinhVienAction, XoaSinhVienAction } from '../../redux/action/SinhVienAction';
import ThemSinhVienComponent from './ThemSinhVienComponent';
import SuaSinhVienComponent from './SuaSinhVienComponent';

const { Title } = Typography;

export default function DanhSachSinhVien() {
    const dispatch = useDispatch()

    //Giao diện Table
    const columns = [
        {
            title: 'Mã Sinh viên',
            dataIndex: 'maSinhVien',
            render: (text, record) => <Button type='link' danger onClick={() => { LayThongTinSinhVien(record) }}>{text}</Button>,
            width: 100
        },
        {
            title: 'Tên Sinh viên',
            dataIndex: 'tenSinhVien',
        },
        {
            title: 'Loại Sinh viên',
            dataIndex: 'loaiSinhVien',
        },
        {
            title: 'Điểm rèn luyện',
            dataIndex: 'diemRenLuyen',
            width: 100
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 150
        },
        {
            title: 'SDT',
            dataIndex: 'soDienThoai',
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => { SuaNhanVien(record) }}><EditOutlined /></Button>
                    <Popconfirm
                        description="Xóa sinh viên này?"
                        onConfirm={() => { confirm(record.maSinhVien) }}
                        onCancel={cancel}
                        okText="Xóa"
                        cancelText="Không"
                    >
                        <Button type='link' danger><DeleteOutlined /></Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const data = useSelector(state => state.SinhVienReducer.danhSachSinhVien)
    //Lấy danh sách sinh viên
    useEffect(() => {
        dispatch(LayDanhSachSinhVienAction())
    }, [])

    //Lấy thông tin sinh viên
    const LayThongTinSinhVien = (thongTinSinhVien) => {
        dispatch({
            type: SHOW_MODAL,
            componentAction: <DetailSinhVienComponent thongTinSinhVien={thongTinSinhVien} />
        })
    }
    //Thêm sinh viên
    const ThemSinhVien = () => {
        dispatch({
            type: SHOW_MODAL,
            componentAction: <ThemSinhVienComponent />
        })
    }
    //Sửa sinh viên
    const SuaNhanVien = (record) => {
        dispatch({
            type: SHOW_MODAL,
            componentAction: <SuaSinhVienComponent sv={record} />
        })
    }
    //Xóa sinh viên
    const confirm = (e) => {
        // console.log(e);
        dispatch(XoaSinhVienAction(e))
    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Xóa thất bại!');
    };

    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <Card
                title={<Title level={2}>QUẢN LÝ SINH VIÊN</Title>}
                extra={<Button type='primary' ghost onClick={() => { ThemSinhVien() }}>Thêm Sinh viên</Button>}
            >
                <Table columns={columns} dataSource={data} scroll={{ y: 300 }} />
            </Card>
        </Space>
    )
}
