import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faQuestionCircle,
    faSearch,
    faSpinner,
    faUpload,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
// import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS=[
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title:"English",
       
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title:"Feedback and Help", 
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title:"Keyboard shortcuts",
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useState(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem />

                                <AccountsItem />

                                <AccountsItem />

                                <AccountsItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loadding')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline b_1 className={cx('custom')} leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                  <Menu items={MENU_ITEMS}>
                    
                  <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                  </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
