import React, { useState } from 'react';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { SuaNhanVienAction } from '../../redux/action/NhanVienAction';

const { Title } = Typography;

export default function SuaNhanVienComponent(record) {
    const dispatch = useDispatch()
    const { maNhanVien, tenNhanVien, chucVu, heSoChucVu, luongCoBan, soGioLamTrongThang } = record.nv

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
                    name="maNhanVien"
                    label="Mã Nhân Viên"
                >
                    <Input defaultValue={maNhanVien} disabled />
                </Form.Item>
                <Form.Item
                    name="tenNhanVien"
                    label="Tên Nhân Viên"
                >
                    <Input defaultValue={tenNhanVien} />

                </Form.Item>
                <Form.Item
                    name="chucVu"
                    label="Chức vụ"
                >
                    <Input defaultValue={chucVu} />

                </Form.Item>
                <Form.Item
                    name="heSoChucVu"
                    label="Hệ số Chức vụ"
                >
                    <Input defaultValue={heSoChucVu} />

                </Form.Item>
                <Form.Item
                    name="luongCoBan"
                    label="Lương cơ bản"
                >
                    <Input defaultValue={luongCoBan} />

                </Form.Item>
                <Form.Item
                    name="soGioLamTrongThang"
                    label="Số giờ làm trong tháng"
                >
                    <Input defaultValue={soGioLamTrongThang} />
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
        dispatch(SuaNhanVienAction(values))
        console.log('values', values)
    };

    return (
        <CustomizedForm
            fields={fields}
            onChange={(newFields) => {
                setFields(newFields);
            }}
        />
    )
}
