import classNames from 'classnames/bind';
import styles from './TagBadge.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function TagBadge({
    className,
    text,
    toggleState,
    isCleared,
    isChosen,
}) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (typeof toggleState === 'function') {
            toggleState(toggle, text);
        }
    }, [toggle])

    useEffect(() => {
        setToggle(false);
    }, [isCleared])

    const setToggleState = () => {
        isChosen(true);
        setToggle(!toggle);
    }

    const setBackgroundColor = () => {
        return {
            backgroundColor: '#217AFF'
        }
    }

    const setTextColor = () => {
        return {
            color: 'white'
        }
    }

    var tagBadgeLogicForReset = () => {
        if (isCleared) {
            return (
                <div onClick={setToggleState} className={cx('wrapper', className)}>
                    <div style={styles} className={cx('tagbadge-child')}></div>
                    <div style={styles} className={cx('grapple')}>{text}</div>
                </div>
            )
        } else {
            return (
                <div onClick={setToggleState} className={cx('wrapper', className)}>
                    <div style={toggle ? setBackgroundColor() : styles} className={cx('tagbadge-child')}></div>
                    <div style={toggle ? setTextColor() : styles} className={cx('grapple')}>{text} {toggle && '✓'}</div>
                </div>
            )
        }
    }

    return (
        <>{tagBadgeLogicForReset()}</>
    );
}

export default TagBadge;
