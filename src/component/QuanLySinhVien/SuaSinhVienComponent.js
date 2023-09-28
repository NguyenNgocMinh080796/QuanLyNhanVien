import React, { useState } from 'react';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { SuaSinhVienAction } from '../../redux/action/SinhVienAction';

const { Title } = Typography;

export default function SuaSinhVienComponent(record) {
    const dispatch = useDispatch()
    const { maSinhVien, tenSinhVien, loaiSinhVien, diemRenLuyen, email, soDienThoai } = record.sv

    const [fields, setFields] = useState([
        {
            name: ['maSinhVien'],
            value: maSinhVien,
        },
        {
            name: ['tenSinhVien'],
            value: tenSinhVien,
        },
        {
            name: ['loaiSinhVien'],
            value: loaiSinhVien,
        },
        {
            name: ['diemRenLuyen'],
            value: diemRenLuyen,
        },
        {
            name: ['email'],
            value: email,
        },
        {
            name: ['soDienThoai'],
            value: soDienThoai,
        },
    ]);
    const CustomizedForm = ({ onChange, fields }) => (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>THÔNG TIN NHÂN VIÊN</Title>
            <Form
                onFinish={onFinish}
                layout="horizontal"
                fields={fields}
                onFieldsChange={(_, allFields) => {
                    onChange(allFields);
                }}
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
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name="tenSinhVien"
                    label="Tên Sinh Viên"
                >
                    <Input defaultValue={tenSinhVien} />

                </Form.Item>
                <Form.Item
                    name="loaiSinhVien"
                    label="Loại Sinh viên"
                >
                    <Input defaultValue={loaiSinhVien} />

                </Form.Item>
                <Form.Item
                    name="diemRenLuyen"
                    label="Điểm rèn luyện"
                >
                    <Input defaultValue={diemRenLuyen} />

                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                >
                    <Input defaultValue={email} />

                </Form.Item>
                <Form.Item
                    name="soDienThoai"
                    label="SDT"
                >
                    <Input defaultValue={soDienThoai} />
                </Form.Item>
                <Form.Item>
                    <Divider orientation='right'>
                        <Button type="primary" htmlType="submit" >
                            Sửa
                        </Button>
                    </Divider>
                </Form.Item>
            </Form>
        </>
    );
    const onFinish = (values) => {
        dispatch(SuaSinhVienAction(values))
        console.log('values', values)
    };

    return (
        <>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
            />
        </>
    )
}
