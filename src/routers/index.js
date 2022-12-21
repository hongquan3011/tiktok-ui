import {HeaderOnly} from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import config from '~/config';
const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.profile, component: Profile },
    { path: config.routers.upload, component: Upload ,layout:HeaderOnly},
    { path: config.routers.search, component: Search ,layout:null},
    
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
