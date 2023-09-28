import React from 'react';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { ThemNhanVienAction } from '../../redux/action/NhanVienAction';

const { Title } = Typography;

export default function ThemNhanVienComponent() {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(ThemNhanVienAction(values))
        // console.log('values', values)
    };

    return (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>THÔNG TIN NHÂN VIÊN</Title>
            <Form
                onFinish={onFinish}
                layout="horizontal"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name="maNhanVien"
                    label="Mã Nhân Viên"
                    rules={[
                        {
                            required: true,
                            message: 'Điền mã nhân viên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="tenNhanVien"
                    label="Tên Nhân Viên"
                    rules={[
                        {
                            required: true,
                            message: 'Điền tên nhân viên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="chucVu"
                    label="Chức vụ"
                    rules={[
                        {
                            required: true,
                            message: 'Điền chức vụ!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="heSoChucVu"
                    label="Hệ số Chức vụ"
                    rules={[
                        {
                            required: true,
                            message: 'Điền hệ số chức vụ!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="luongCoBan"
                    label="Lương cơ bản"
                    rules={[
                        {
                            required: true,
                            message: 'Điền lương cơ bản!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="soGioLamTrongThang"
                    label="Số giờ làm trong tháng"
                    rules={[
                        {
                            required: true,
                            message: 'Điền số giờ làm trong tháng!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Divider orientation='right'>
                        <Button type="primary" htmlType="submit" >
                            Thêm
                        </Button>
                    </Divider>
                </Form.Item>
            </Form>
        </>
    )
}
