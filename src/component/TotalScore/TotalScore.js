import classNames from 'classnames/bind';
import styles from './TotalScore.module.scss';
import TagBadge from '../TagBadge/TagBadge';

const cx = classNames.bind(styles);

function TotalScore() {
    return (
        <div className={cx('wrapper')}>
            <p>Power</p>
            <h3>7</h3>
        </div>
    );
}

export default TotalScore;
