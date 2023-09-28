import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Image } from 'antd';
import ContentComponent from '../component/ContentComponent';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function MainBoard() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()

    return (
        <Layout style={{ height: window.innerHeight }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Image
                    width='100%'
                    src="https://picsum.photos/200"
                />
                <Menu
                    onClick={(key) => { navigate(key.key) }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '/',
                            icon: <UserOutlined />,
                            label: 'Quản lý nhân viên',
                        },
                        {
                            key: 'sinhvien',
                            icon: <UnorderedListOutlined />,
                            label: 'Quản lý sinh viên',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ContentComponent />
                </Content>
            </Layout>
        </Layout>
    )
}
