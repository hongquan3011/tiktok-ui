import {HeaderOnly} from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import routersConfig from '~/config/routers';
const publicRoutes = [
    { path: routersConfig.home, component: Home },
    { path: routersConfig.following, component: Following },
    { path: routersConfig.profile, component: Profile },
    { path: routersConfig.upload, component: Upload ,layout:HeaderOnly},
    { path: routersConfig.search, component: Search ,layout:null},
    
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
