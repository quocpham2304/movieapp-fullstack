
import React from 'react';
import { Layout, Row, theme } from 'antd';
import FooterLDP from '../childrenComponent/Footer';
import HeaderLDP from '../childrenComponent/Header';
import { Outlet } from 'react-router-dom';
import GlobalLoading from '../childrenComponent/GlobalLoading';

const { Header, Content, Footer } = Layout;
const MainLayoutnew = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      {/* {GlobalLoading} */}
      <GlobalLoading />
      {/* {GlobalLoading} */}

      {/* {loading modal} */}
      {/* {loading modal} */}

      {/* {header} */}
      <Row>
        <HeaderLDP />
      </Row>
      {/* {header} */}
      <Content theme={theme}>
        {/* {main} */}
        <Row>
          <Outlet />
        </Row>
        {/* {main} */}
      </Content>
      {/* {footer} */}
      <Row>
        <FooterLDP />
      </Row>
      {/* {footer} */}
    </Layout>
  );
};
export default MainLayoutnew;