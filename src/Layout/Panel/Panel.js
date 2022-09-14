import React from 'react';
import './panel.css';
import lsm from '../../assets/lsmwhite.jpeg';
import { Link , useHistory } from 'react-router-dom'
import { Layout, Menu  , Button} from 'antd';
import {resetLoginStore} from '../../actions/AuthAction'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

const Panel = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logOutHandler = () => {
        localStorage.removeItem('auth_token');
        dispatch(resetLoginStore())
        history.push('/');
    }
    return (
        <div>
            <Layout>
                <Sider
                    style={{
                        // overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        zIndex: 1,
                    }}
                    className="sidebar-menu-logo-background"
                    breakpoint="lg"
                    collapsedWidth="0"
                // onBreakpoint={(broken) => {
                // 	console.log(broken);
                // }}
                // onCollapse={(collapsed, type) => {
                // 	console.log(collapsed, type);
                // }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <div className="lsm-logo" >
                            <img src={lsm} alt="lsm" />
                        </div>
                        {/* <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="#">New Admission</Link>

                        </Menu.Item> */}
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/admission">Admission</Link>

                        </Menu.Item>
                        <Menu.Item key="4" icon={<UploadOutlined />}>
                            <Link to="/contactQueries">Contact Queries</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UploadOutlined />}>
                            <Link to="/registration">Registration</Link>
                        </Menu.Item>
                        {/* <Menu.Item key="6" icon={<BarChartOutlined />}>
                            <Link to="#">Library System</Link>

                        </Menu.Item>
                        <Menu.Item key="7" icon={<CloudOutlined />}>
                            <Link to="#">Facalty Member Account</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<AppstoreOutlined />}>
                            <Link to="#">Student Portal Info</Link>
                        </Menu.Item> */}
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="header-site-layout-background" style={{ padding: 0 }} >
                        <div className="panel_header_main" >
                            <div>
                                <h1>Lahore School of Management</h1>
                            </div>
                            <div><Button onClick={() => logOutHandler()} >Log out</Button></div>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>LAHORE SCHOOL OF MANAGEMENT, 2021</Footer>
                </Layout>
            </Layout>,
        </div>
    )
}

export default Panel
