import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    small,
    disabled,
    round,
    className,
    leftIcon,
    rightIcon,
    large,
    b_1,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        round,
        small,
        large,
        b_1,
        [className]: className,
        leftIcon,
        rightIcon,
    });
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon&& <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon&& <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
// eslint-disable-next-line react/no-typos
Button.propTypes = {
    to:PropTypes.string,
    href:PropTypes.string,
    primary:PropTypes.bool,
    outline:PropTypes.bool,
    small:PropTypes.bool,
    disabled:PropTypes.bool,
    round:PropTypes.bool,
    className:PropTypes.string,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    large:PropTypes.bool,
    b_1:PropTypes.bool,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func,
    
};
export default Button;
