import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faSignOut,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, MessengerIcon, Notification } from '~/components/Icons/Icons';
import Images from '~/components/Images/Images';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vn', title: 'Tieng viet' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins ',
            to: '/get-coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routers.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messenger" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notification" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <span className={cx('count-notification')}>5</span>
                                    <Notification />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline b_1 className={cx('custom')} leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/316686549_1516865832161110_5798837938500743717_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dQqV_MFYwZQAX8r2m6M&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB0GaBdg_jTEZaD3q6ni3hccgMHA9ci8J5BcZD4FlEBtQ&oe=63A8005F"
                                alt="Nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
