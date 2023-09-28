import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;

export default function DetailSinhVienComponent(thongTinSinhVien) {
    //Thông tin sinh viên
    const { maSinhVien, tenSinhVien, loaiSinhVien, diemRenLuyen, email, soDienThoai, } = thongTinSinhVien.thongTinSinhVien

    //Layout hiển thị
    const CustomizedForm = ({ onChange, fields }) => (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>THÔNG TIN NHÂN VIÊN</Title>
            <Form
                name="global_state"
                layout="horizontal"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                fields={fields}
                onFieldsChange={(_, allFields) => {
                    onChange(allFields);
                }}
                disabled
            >
                <Form.Item
                    name="maSinhVien"
                    label="Mã Sinh Viên"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="tenSinhVien"
                    label="Tên Sinh Viên"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="loaiSinhVien"
                    label="Loại Sinh viên"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="diemRenLuyen"
                    label="Điểm rèn luyện"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="soDienThoai"
                    label="SDT"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
            </Form>
        </>
    );
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
