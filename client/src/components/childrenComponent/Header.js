import React, { useEffect, useState } from 'react';
import { Affix, Button, Col, Drawer, Layout, Menu, Row, Switch, Typography } from "antd"
import { Link } from 'react-router-dom';
import Logo from "./Logo.js";
import menuConfigs from "../../configs/menuConfigs.js";
import { useDispatch, useSelector } from 'react-redux';
import { themeModes } from "../../configs/themeConfigs.js";
import { setThemeMode } from '../../redux/features/themeModeSlice.js';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Usermenu from './Usermenu.js';
import { setAuthModalOpen } from '../../redux/features/authModalSlice.js';

const HeaderLDP = () => {
    const { themeMode } = useSelector((state) => state.themeMode);
    const { user } = useSelector((state) => state.user);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // const onSwithTheme = () => {
    //     const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    //     dispatch(setThemeMode(theme));
    // };
    // const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const { Content } = Layout;
    return (
        <Content style={{ height: "max-content", backgroundColor: 'black' }}>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
                className='pc-header'>
                <Col span={2} offset={2} >
                    <Logo />
                </Col>
                <Col style={{ float: 'left' }} >
                    <Menu mode="horizontal" style={{ backgroundColor: 'black', color: 'white' }}>
                        <Row>
                            <Col >
                                {menuConfigs.main.map((item, index) => {
                                    return (
                                        <Menu.Item key={index} style={{ backgroundColor: "black", borderColor: "none", color: "white" }}>
                                            <Link to={item.path}>{item.display}</Link>
                                        </Menu.Item>
                                    )
                                })}
                            </Col>
                            <Col style={{ left: "100%" }}>
                                {!user && <Menu.Item
                                    style={{ backgroundColor: "red", borderColor: "red", color: "white" }}
                                    type="primary"
                                    onClick={() => dispatch(setAuthModalOpen(true))}
                                    key={"dangnhap"}
                                >
                                    Đăng Nhập
                                    {user && <Usermenu />}
                                </Menu.Item>}
                            </Col>
                        </Row>
                    </Menu>
                </Col>
            </Row>
            <Row className='mobile-header'>
                <Col>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={showDrawer}
                        style={{ color: 'white', minWidth: "200px",fontSize:"1.7rem", paddingTop:"4%" }} />
                    <Drawer
                        style={{ backgroundColor: "black" }}
                        open={open}
                        closable={false}
                        onClose={onClose}
                        placement="left"
                    >
                        <Logo/>
                        <Menu style={{ backgroundColor: 'black', color: 'white' }}>
                            <Row>
                                <Col >
                                    {menuConfigs.main.map((item, index) => {
                                        return (
                                            <Menu.Item key={index} style={{ backgroundColor: "black", borderColor: "none", color: "white" }}>
                                                <Link to={item.path}>{item.icon} {item.display}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                                    {!user && <Menu.Item
                                        style={{ backgroundColor: "red", borderColor: "red", color: "white" }}
                                        type="primary"
                                        onClick={() => dispatch(setAuthModalOpen(true))}
                                        key={"dangnhap"}
                                    >
                                        Đăng Nhập
                                        {user && <Usermenu />}
                                    </Menu.Item>}
                                </Col>
                            </Row>
                        </Menu>
                    </Drawer>
                </Col>
                <Col>
                    <Logo />
                </Col>
            </Row>
        </Content>
    )
}

export default HeaderLDP;