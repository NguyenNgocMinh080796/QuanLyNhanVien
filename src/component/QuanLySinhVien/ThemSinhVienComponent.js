import React from 'react';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { ThemSinhVienAction } from '../../redux/action/SinhVienAction';

const { Title } = Typography;

export default function ThemSinhVienComponent() {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(ThemSinhVienAction(values))
        // console.log('values', values)
    };

    return (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>THÔNG TIN SINH VIÊN</Title>
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
                    name="maSinhVien"
                    label="Mã Sinh Viên"
                    rules={[
                        {
                            required: true,
                            message: 'Điền mã sinh viên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="tenSinhVien"
                    label="Tên Sinh Viên"
                    rules={[
                        {
                            required: true,
                            message: 'Điền tên sinh viên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="loaiSinhVien"
                    label="Loại sinh viên"
                    rules={[
                        {
                            required: true,
                            message: 'Điền loại sinh viên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="diemRenLuyen"
                    label="Điểm rèn luyện"
                    rules={[
                        {
                            required: true,
                            message: 'Điền điểm rèn luyện!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Điền Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="soDienThoai"
                    label="SDT"
                    rules={[
                        {
                            required: true,
                            message: 'Điền SDT!',
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
