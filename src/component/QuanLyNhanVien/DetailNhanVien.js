import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';
import { useSelector } from 'react-redux';

const { Title } = Typography;

export default function DetailNhanVien() {
    const { maNhanVien, tenNhanVien, chucVu, heSoChucVu, luongCoBan, soGioLamTrongThang } = useSelector(state => state.NhanVienReducer.thongTinNhanVien)

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
                    name="maNhanVien"
                    label="Mã Nhân Viên"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="tenNhanVien"
                    label="Tên Nhân Viên"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="chucVu"
                    label="Chức vụ"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="heSoChucVu"
                    label="Hệ số Chức vụ"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="luongCoBan"
                    label="Lương cơ bản"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
                <Form.Item
                    name="soGioLamTrongThang"
                    label="Số giờ làm trong tháng"
                >
                    <Input style={{ fontWeight: 'bolder' }} />
                </Form.Item>
            </Form>
        </>
    );
    const [fields, setFields] = useState([
        {
            name: ['maNhanVien'],
            value: maNhanVien,
        },
        {
            name: ['tenNhanVien'],
            value: tenNhanVien,
        },
        {
            name: ['chucVu'],
            value: chucVu,
        },
        {
            name: ['heSoChucVu'],
            value: heSoChucVu,
        },
        {
            name: ['luongCoBan'],
            value: luongCoBan,
        },
        {
            name: ['soGioLamTrongThang'],
            value: soGioLamTrongThang,
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
