import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  LineChartOutlined,
  BarChartOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const menuList = [
  {
    title: "homepage", // 菜单标题名称
    key: "/home", // 对应的path
    icon: <HomeOutlined />, // 图标名称
    isPublic: true, // 是否是公开的
  },
  {
    title: "products",
    key: "/products",
    icon: <AppstoreOutlined />,
    children: [
      // 子菜单列表
      {
        title: "category",
        key: "/category",
        icon: "",
      },
      {
        title: "product",
        key: "/product",
        icon: "",
      },
    ],
  },

  {
    title: "user",
    key: "/user",
    icon: <UserOutlined />,
  },
  {
    title: "role",
    key: "/role",
    icon: "",
  },

  {
    title: "charts",
    key: "/charts",
    icon: "area-chart",
    children: [
      {
        title: "bar",
        key: "/charts/bar",
        icon: <BarChartOutlined />,
      },
      {
        title: "line",
        key: "/charts/line",
        icon: <LineChartOutlined />,
      },
      {
        title: "pie",
        key: "/charts/pie",
        icon: <PieChartOutlined />,
      },
    ],
  },
];

export default menuList;
