import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import Row from '../Row/Row';
import characters from '../../data/characters.json';
import tag_names from '../../data/tag_names.json';

const cx = classNames.bind(styles);
tag_names = tag_names.map((item) => {
    return item.name;
})

function SearchResult({ input }) {

    var chosenCharacters = [];
    
    characters.forEach((item) => {
            if (item.name.toLowerCase().startsWith(input.searchInput.toLowerCase())) {
                if (input.filterInput.length == 0) {
                    chosenCharacters.push(item);
                } else {
                    var itemTags = item.tags?.map((i) => { return i.tag_name.toLowerCase() });
                    if (input.filterInput.every(i => itemTags?.includes(i))) {
                        chosenCharacters.push(item);
                    }
                }
        }
    });

    var rows = chosenCharacters.map((item, index) => {
        return <Row key={index} charThumbnail={item.thumbnail} name={item.name} tags={item.tags} abilities={item.abilities} />
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('rows')}>
                {rows}
            </div>
        </div>
    );
}

export default SearchResult;
