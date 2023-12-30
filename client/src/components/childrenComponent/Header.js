import React, { useEffect, useState } from 'react';
import { Affix, Button, Col, Menu, Row, Switch, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { Link } from 'react-router-dom';
import Logo from "./Logo.js";
import menuConfigs from "../../configs/menuConfigs.js";
import { useDispatch, useSelector } from 'react-redux';
import { themeModes } from "../../configs/themeConfigs.js";
import { setThemeMode } from '../../redux/features/themeModeSlice.js';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Usermenu from './Usermenu.js';
import { setAuthModalOpen } from '../../redux/features/authModalSlice.js';
import { useSyncExternalStore } from "use-sync-external-store";

// const ScrollAppBar = ({ children, window }) => {
//     const { themeMode } = useSelector((state) => state.themeMode);
//     const [affixed, setAffixed] = useSyncExternalStore(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.pageYOffset > 50) {
//                 setAffixed(true);
//             } else {
//                 setAffixed(false);
//             }
//         };
//         if (window) {
//             window.addEventListener('scroll', handleScroll);
//         }

//         return () => {
//             if (window) {
//                 window.removeEventListener('scroll', handleScroll);
//             }
//         };
//     }, []);

//     return (
//         <Affix offsetTop={affixed ? 0 : -100}>
//             {React.cloneElement(children, {
//                 style: {
//                     color: affixed ? "text.primary" : themeMode === themeModes.dark ? "primary.contrastText" : "text.primary",
//                     backgroundColor: affixed ? "background.paper" : themeMode === themeModes.dark ? "transparent" : "background.paper"
//                 }
//             })}
//         </Affix>
//     );
// };

const HeaderLDP = () => {
    const { themeMode } = useSelector((state) => state.themeMode);
    const { user } = useSelector((state) => state.user);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();

    // const onSwithTheme = () => {
    //     const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    //     dispatch(setThemeMode(theme));
    // };
    // const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        // <ScrollAppBar>
        <Content style={{ height: "max-content", backgroundColor: 'black' }}>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col span={2} offset={2}  >

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
                                    variant="contained"
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
                {/* <Col span={2} style={{ justifyContent: 'center' }}>
                        <Switch
                            style={{ justifyContent: 'center' }}
                            onClick={onSwithTheme}
                            checkedChildren={<FontAwesomeIcon icon={faMoon} />}
                            unCheckedChildren={<FontAwesomeIcon icon={faSun} />}

                        >
                            {themeMode === themeModes.dark}
                            {themeMode === themeModes.light}
                        </Switch>
                    </Col> */}
            </Row>
        </Content>
        // </ScrollAppBar>
    )
}

export default HeaderLDP;