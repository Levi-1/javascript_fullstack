import loadable from '../utils/loadable'
import { HomeOutlined, StarOutlined, MehOutlined, EditOutlined  } from '@ant-design/icons'
const About = loadable(() => import("../pages/web/About/about"))
const Star = loadable(() => import("../pages/web/Star/star"))
const List = loadable(() => import("../pages/web/list/list"))
const Archive = loadable(() => import("../pages/web/Archive/archive"))
// const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
    {
        menu: true,
        icon: HomeOutlined,
        title: '首页',
        path: '/web/index',
        component: List
    },
    {
        menu: true,
        icon: EditOutlined,
        title: '归档',
        path: '/web/archive',
        component: Archive
    },
    {
        menu: true,
        icon: StarOutlined,
        title: '收藏',
        path: '/web/star',
        component: Star
    },
    {
        menu: true,
        icon: MehOutlined,
        title: '关于',
        path: '/web/about',
        component: About
    }
]

export default webRoutes