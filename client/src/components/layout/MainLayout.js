import { Layout, Switch } from "antd";
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import GlobalLoading from "../childrenComponent/GlobalLoading";
import Footer from "../childrenComponent/Footer";
import Topbar from "../childrenComponent/Topbar";

const MainLayout = () => {
  const { Content } = Layout;
  const [theme, setTheme] = useState('dark');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }
  return (
    <Layout theme={theme}>
      {/* {GlobalLoading} */}
      <GlobalLoading />
      {/* {GlobalLoading} */}

      {/* {loading modal} */}
      {/* {loading modal} */}
      <Content theme={theme}>
        {/* {header} */}
        <Topbar />
        {/* <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
        {/* {header} */}

        <Outlet />
        {/* {main} */}
      </Content>
      {/* {footer} */}
      <Footer />
      {/* {footer} */}
    </Layout>
  )
};

export default MainLayout;