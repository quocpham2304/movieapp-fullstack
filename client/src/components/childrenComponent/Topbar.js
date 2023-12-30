import { useSelector, useDispatch } from "react-redux";
// import MenuIcon from "@mui/icons-material/Menu";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import { AppBar, Box, Button, IconButton, Stack, Toolbar, useScrollTrigger } from "@mui/material";
import React, { cloneElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menuConfigs.js";
import { themeModes } from "../../configs/themeConfigs.js";
import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
import { setThemeMode } from "../../redux/features/themeModeSlice.js";
import Logo from "./Logo";
import Sidebar from "./Sidebar.js";
import Usermenu from "./Usermenu.js";
import { Affix, Button, Col, Menu, Row, Switch } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout.js";


const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const [affixed, setAffixed] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
       if (window.pageYOffset > 50) {
         setAffixed(true);
       } else {
         setAffixed(false);
       }
     };
     if (window) {
     window.addEventListener('scroll', handleScroll);}
 
     return () => {
      if (window) {
        window.removeEventListener('scroll', handleScroll);
      }
     };
  }, []);
 
  return (
     <Affix offsetTop={affixed ? 0 : -100}>
       {React.cloneElement(children, {
         style: {
           color: affixed ? "text.primary" : themeMode === themeModes.dark ? "primary.contrastText" : "text.primary",
           backgroundColor: affixed ? "background.paper" : themeMode === themeModes.dark ? "transparent" : "background.paper"
         }
       })}
     </Affix>
  );
};
const Topbar = () => {
  const { user } = useSelector((state) => state.user);
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  const onSwithTheme = () => {
    const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <ScrollAppBar>
      <Content style={{ height: "max-content", backgroundColor: 'black' }}>
            <Row>
                <Col span={2} offset={2}  >
                    
                    <Logo />
                </Col>
                <Col span={6} >
                    <Menu mode="horizontal" style={{ backgroundColor: 'black',color:'white'}}>
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
      
        <Menu mode="horizontal" items={items}>
          <div>
                <Logo />
            
              {menuConfigs.main.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                  <Link to={item.path}>{item.display}</Link>
              </Menu.Item>
              )})}
              {/* <Switch
                sx={{ color: "inherit" }}
                onClick={onSwithTheme}
              >
                {themeMode === themeModes.dark}
                {themeMode === themeModes.light}
              </Switch> */}
            <div>
              {!user && <Button
                variant="contained"
                onClick={() => dispatch(setAuthModalOpen(true))}
              >
                sign in
              </Button>}
            </div>
            {user && <Usermenu/>}

          </div>
        </Menu>
      </ScrollAppBar>
    </>
  );
};

export default Topbar;