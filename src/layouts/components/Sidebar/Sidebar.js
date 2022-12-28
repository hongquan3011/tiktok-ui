import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { HomeIcon,HomeActiveIcon, UserGroupIcon,UserGroupActiveIcon, LiveIcon,LiveActiveIcon} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routers.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>} />
                <MenuItem title="Following" to={config.routers.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon/>} />
                <MenuItem title="LIVE" to={config.routers.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>
            </Menu> 
            <SuggestedAccounts label='Suggested Accounts'/>
            <SuggestedAccounts label='Following Accounts'/>
        </aside>
       
    );
}

export default Sidebar;
