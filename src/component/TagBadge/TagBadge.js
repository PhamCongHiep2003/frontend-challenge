import classNames from 'classnames/bind';
import styles from './TagBadge.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function TagBadge(props) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if(typeof props.toggleState === 'function') {
            props.toggleState(toggle, props.text);
        }
    }, [toggle])

    const setToggleState = () => {
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

    return (
        <div onClick={setToggleState} className={cx('wrapper', props.className)}>
            <div style={toggle ? setBackgroundColor() : styles} className={cx('tagbadge-child')}></div>
            <div style={toggle ? setTextColor() : styles} className={cx('grapple')}>{props.text} {toggle && '✓'}</div>
        </div>
    );
}

export default TagBadge;
