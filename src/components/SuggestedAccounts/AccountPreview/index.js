import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
           <div className={cx('header')}>
                <img className={cx('avatar')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAllBMVEX29vYzMzPGxsarq6t4eHju7u5LS0tdXV3n5+fW1tY3Nzfz8/OOjo5ERET19fVTU1Pb29vq6uq+vr7l5eWjo6Pi4uLR0dGAgIA/Pz/V1dWSkpJpaWnt7e3KysqVlZVjY2NXV1eenp5ycnJfX19aWlrw8PCZmZmKioqHh4dPT0/f39/ExMS3t7eysrJ7e3uurq6oqKi0tLTpSHobAAACMElEQVR42u3V3XKiMACG4XxgtSTyr6KioFbrf9u9/5vbkMjuzlBnHTwoB99z4BAOkpeAIIiIiIiIiIiIiIiIiIiIiIiIiIiIiOhRDjRXaC7QexHfcmH1PdHG84GrU8cDUaiOB/qTu4HW6wAYip/g6LoSyHZ/ApXT8yHfRotGYH3gRtlUbjyxWB+xvSh99rIJJdDPHCW03XULufnqA44eBbNMH62KtHVgPwkhkzrwZQgrnN0LHEyhHd0Qmvylzw5hyXdduPiAZQLVWsI4eq0DZyMgj21goI+niRr3qlN3ArNxMKk2ZanGub2qYhip4JQBYSSC9yr0JVj6JvBTIo+CWEdnu7aBXloCIxuYvgEHJcRyCiT3brHe554t0zGDV3HjmZs63gKbRT2KS+BcrSNxjFoHikQi3JslJ74JEFEIzP8f6N4C08+PgQ/NMTN81bnVb006rQPNejBL6jHcuujBQPucWY6dwQTWo1r7QHtH2+9gIiHnUTwzSfUMXj1qhLUJVAeg8QxeHg2cm9/6GVwBe3UbmfmGSmjx3GsdaHfs339xugHyuPkl+T5wBPQnQbyWVZLamxkWIzMKXAlZxEKdy/5TgTqs+R58NDAKUZEmSczCxnvQeCZQS8vGl+ThQHHqScjD+fbtSOc+/Hni3y49KrYSclvMlOiUBFiNRRd55TUWajkA9h3bM+vvuznv5gaKcbaSgJ9fd4KIiIiIiIiIiIiIiIiIiIiIiIiIiIiI7vgNQVohigyaqrEAAAAASUVORK5CYII="  alt=""/>
                <Button primary small>Follow</Button>
           </div>   
           <div className={cx('body')}>
                        <p className={cx('nickname')}>
                            <strong>asddfe</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Pham hong quan</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Followers </span>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Likes </span>
                            
                        </p>
                    </div>

        </div>
     );
}

export default AccountPreview;