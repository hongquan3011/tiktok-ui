import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
import Images from '~/components/Images/Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> {data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>

                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
// eslint-disable-next-line react/no-typos
AccountsItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountsItem;
