import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './Filters.module.scss';
import TagBadge from '../TagBadge/TagBadge';
import tag_names from '../../data/tag_names.json'
const cx = classNames.bind(styles);

function Filters(props) {

    const [chosenList, setChosenList] = useState([]);

    var newArray = [...chosenList];

    useEffect(() => {
        props.filterInput(newArray);
    }, [newArray.length]);

    const handleToggleState = (toggle, tag_name) => {
        var newArray = [...chosenList];
        if(toggle) {
            newArray.push(tag_name);
            setChosenList(newArray);
        } else {
            newArray = newArray.filter((item) => {return item != tag_name});
            setChosenList(newArray);
        }
    }

    return (
        <div className={cx('wrapper')}>
            {tag_names.map((tag_name, index) => {
                return <TagBadge key={index} text={tag_name.name} toggleState={handleToggleState} />
            })}
            <TagBadge text='My Team' />
            <p className={cx('clear-all')}>Clear all</p>
        </div>
    );
}

export default Filters;
