import classNames from 'classnames/bind';
import styles from './Totals.module.scss';
import TotalScore from '../TotalScore/TotalScore';
import CharImage from '../CharImage/CharImage';

const cx = classNames.bind(styles);

function Totals() {
    return (
        <div className={cx('wrapper')}>
                <p className={cx('text')}>Your champions!</p>
                <div className={cx('char-image')}>
                    <CharImage/>
                    <CharImage/>
                    <CharImage/>
                    <CharImage/>
                    <CharImage/>
                    <CharImage/>
                </div>
                <div className={cx('total-score')}>
                    <TotalScore/>
                    <TotalScore/>
                    <div className={cx('cut-line')}></div>
                    <TotalScore/>
                    <div className={cx('cut-line')}></div>
                    <TotalScore/>
                    <TotalScore/>
                </div>
                <p className={cx('small-text')}>* Totals as average for squad</p>
        </div>
    );
}

export default Totals;
