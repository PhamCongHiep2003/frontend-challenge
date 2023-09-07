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

    var myTeamList = [];

    const handleSearchInput = (params) => {
        setInput({
            searchInput: params,
            filterInput: input.filterInput,
        });
    };

    const handleFilterInput = (params) => {
        params = params.map(i => i.toLowerCase());
        setInput({
            searchInput: input.searchInput,
            filterInput: params,
        });
    };

    const handleMyTeamInput = (isChecked, id) => {
        if(isChecked) {
            myTeamList.push(id);
        } else {
            myTeamList = myTeamList.filter(i => i !== id);
        }
        console.warn('myTeamList', myTeamList);
    };

    return (
        <div className={cx('wrapper')}>
            <Search searchInput={handleSearchInput} />
            <Filters filterInput={handleFilterInput} />
            <SearchResult input={input} myTeamInput={handleMyTeamInput} />
        </div>
    );
}

export default FilterSearch;
