import PropTypes from 'prop-types';

import { useState, forwardRef } from 'react';
import image from '~/assets/images/';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Images = forwardRef(({ className, src, alt, fallBack: customfallBack = image.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const HandleError = () => {
        setFallBack(customfallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={HandleError}
        />
    );
});
forwardRef.propTypes = {
    className:PropTypes.string,
    src:PropTypes.string,
    alt:PropTypes.string,
    fallBack:PropTypes.string,
};
export default Images;
