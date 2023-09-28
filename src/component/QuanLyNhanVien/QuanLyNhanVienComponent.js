import React, { useEffect } from 'react';
import { Button, Space, Table, message, Popconfirm, Card, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { LayDanhSachNhanVienAction, LayThongTinNhanVienAction, XoaNhanVienAction } from '../../redux/action/NhanVienAction';
import { SHOW_MODAL } from '../../redux/type/ModalType';
import ThemNhanVienComponent from './ThemNhanVienComponent';
import SuaNhanVienComponent from './SuaNhanVienComponent';

const { Title } = Typography;

export default function QuanLyNhanVienComponent() {
    const dispatch = useDispatch()

    //Giao diện Table
    const columns = [
        {
            title: 'Mã Nhân viên',
            dataIndex: 'maNhanVien',
            render: (text, record) => <Button type='link' danger onClick={() => { LayThongTinNhanVien(text) }}>{text}</Button>,
        },
        {
            title: 'Tên Nhân viên',
            dataIndex: 'tenNhanVien',
        },
        {
            title: 'Chức vụ',
            dataIndex: 'chucVu',
        },
        {
            title: 'Hệ số Chức vụ',
            dataIndex: 'heSoChucVu',
            width: 100,
        },
        {
            title: 'Lương cơ bản',
            dataIndex: 'luongCoBan',
        },
        {
            title: 'Số giờ làm trong tháng',
            dataIndex: 'soGioLamTrongThang',
            width: 100,
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => { SuaNhanVien(record) }}><EditOutlined /></Button>
                    <Popconfirm
                        description="Xóa nhân viên này?"
                        onConfirm={() => { confirm(record.maNhanVien) }}
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
    const data = useSelector(state => state.NhanVienReducer.danhSachNhanVien)

    //Lấy danh sách Nhân viên
    useEffect(() => {
        dispatch(LayDanhSachNhanVienAction())
    }, [])

    //Lấy thông tin nhân viên
    const LayThongTinNhanVien = (maNhanVien) => {
        dispatch(LayThongTinNhanVienAction(maNhanVien))
    }
    //Thêm nhân viên
    const ThemNhanVien = () => {
        dispatch({
            type: SHOW_MODAL,
            componentAction: <ThemNhanVienComponent />
        })
    }
    //Sửa nhân viên
    const SuaNhanVien = (record) => {
        dispatch({
            type: SHOW_MODAL,
            componentAction: <SuaNhanVienComponent nv={record} />
        })
    }
    //Xóa nhân viên
    const confirm = (e) => {
        // console.log(e);
        dispatch(XoaNhanVienAction(e))
    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Xóa thất bại!');
    };

    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <Card
                title={<Title level={2}>QUẢN LÝ NHÂN VIÊN</Title>}
                extra={<Button type='primary' ghost onClick={() => { ThemNhanVien() }}>Thêm Nhân viên</Button>}
            >
                <Table columns={columns} dataSource={data} scroll={{ y: 300 }} />
            </Card>
        </Space>
    )
}
