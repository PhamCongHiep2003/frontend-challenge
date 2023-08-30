import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search(props) {

    const setSearchInput = (e) => {
        props.searchInput(e.target.value)
    }

    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} placeholder='Search Characters...' onChange={setSearchInput} />
        </div>
    );
}

export default Search;
