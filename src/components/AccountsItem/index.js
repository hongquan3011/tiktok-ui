import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountsItem.module.scss';
const cx = classNames.bind(styles)
function AccountsItem() {
    return ( 
        <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1671264000&x-signature=%2FoycxYYWiC3Azp1mHefmeIlfN%2Fk%3D" alt="Hoa"/>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span> Nguyen van A</span>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                       </h4>

                    <span className={cx('username')}>nguyencana</span>
                </div>
        </div>
     );
}

export default AccountsItem;