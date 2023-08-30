import classNames from 'classnames/bind';
import styles from './Masthead.module.scss';
import logo from '../../img/Mortal-Kombat-Logo.png'

const cx = classNames.bind(styles);

function Masthead() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} alt="morta-combat logo" src={logo} />
        </div>
    );
}

export default Masthead;
