
import {
  HomeOutlined
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilm, faHeart, faLock, faMagnifyingGlass, faTv } from '@fortawesome/free-solid-svg-icons';

const main = [
  {
    display: "Trang Chủ",
    path: "/",
    icon: <HomeOutlined />,
    state: "home"
  },
  {
    display: "Phim Chiếu Rạp",
    path: "/movie",
    icon: <FontAwesomeIcon icon={faFilm} />,
    state: "movie"
  },
  {
    display: "Phim Truyền Hình",
    path: "/tv",
    icon: <FontAwesomeIcon icon={faTv} />,
    state: "tv"
  },
  {
    display: "Tìm Kiếm",
    path: "/search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    state: "search"
  }
];

const user = [
  {
    display: "Yêu Thích",
    path: "/favorites",
    icon: <FontAwesomeIcon icon={faHeart} />,
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <FontAwesomeIcon icon={faComment} />,
    state: "reviews"
  },
  {
    display: "Cập Nhập Mật Khẩu",
    path: "/password-update",
    icon: <FontAwesomeIcon icon={faLock} />,
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;