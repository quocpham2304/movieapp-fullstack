import menuConfigs from "../../configs/menuConfigs.js";
import { setUser } from "../../redux/features/userSlice.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Typography } from "antd";
import { arrowleftonrectangle } from '@heroicons/react/24/solid'

const UserMenu = () => {
 const { user } = useSelector((state) => state.user);

 const dispatch = useDispatch();

 const [anchorEl, setAnchorEl] = useState(null);

 const toggleMenu = (e) => setAnchorEl(e.currentTarget);

 return (
    <>
      {user && (
        <>
          <Typography.Text
            onClick={toggleMenu}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {user.displayName}
          </Typography.Text>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            {menuConfigs.user.map((item, index) => (
              <Menu.Item key={index}>
                <Link to={item.path} onClick={() => setAnchorEl(null)}>
                 {item.icon}
                 <span style={{ marginLeft: 8 }}>{item.display}</span>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item onClick={() => dispatch(setUser(null))}>
              <Link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
<arrow-left-on-rectangle/>
                <span style={{ marginLeft: 8 }}>Sign Out</span>
              </Link>
            </Menu.Item>
          </Menu>
        </>
      )}
    </>
 );
};

export default UserMenu;