import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './FilterSearch.module.scss';
import Search from '../Search/Search';
import Filters from '../Filters/Filters';
import SearchResult from '../SearchResult/SearchResult';

const cx = classNames.bind(styles);

function FilterSearch() {

    const [input, setInput] = useState({
        searchInput: '',
        filterInput: ''
    });

    const handleSearchInput = (params) => {
        setInput({
            searchInput: params,
            filterInput: input.filterInput,
        });
    }

    const handleFilterInput = (params) => {
        params = params.map(i => i.toLowerCase());
        setInput({
            searchInput: input.searchInput,
            filterInput: params,
        });
    }

    return (
        <div className={cx('wrapper')}>
            <Search searchInput={handleSearchInput} />
            <Filters filterInput={handleFilterInput} />
            <SearchResult input={input}/>
        </div>
    );
}

export default FilterSearch;
