import React from 'react';
import { Button, Col, Menu, Row, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import menuConfigs from "../../configs/menuConfigs.js";


const FooterLDP = () => {
    const { Text, Paragraph } = Typography
    return (
        <Content
        className='pc-footer' 
        style={{ height: "max-content", backgroundColor: 'black', marginTop:"100%" }}>
            <Row>
                <Col span={6} offset={2} style={{ left: "5%" }} >
                    {/* <img style={{ height: 150, }} src="https://quocpham2304.github.io/webtuyendungmindX/img/logo-a.png" /> */}
                    <Logo />
                </Col>
                <Col span={6} style={{left:"10%"}}>
                    <Menu mode="horizontal" style={{ backgroundColor: 'black',color:'white',paddingLeft:'100%' }}>
                        {menuConfigs.main.map((item, index) => {
                            return (
                            <Menu.Item key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </Menu.Item>
                        )})}
                    </Menu>
                </Col>
            </Row>
        </Content>
    )
}

export default FooterLDP;