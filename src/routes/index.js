//Layout
import { Headeronly } from '../components/Layout';

//Page
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: Headeronly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
