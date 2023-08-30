import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import CharImage from '../CharImage/CharImage';
import TagBadge from '../TagBadge/TagBadge';
import CharThumbnail from '../CharThumbnail/CharThumbnail';

const cx = classNames.bind(styles);

function Row({
    charThumbnail,
    name,
    tags = [],
    abilities
}) {
    var tags = Array.from(tags.map((item, index) => {
        return <TagBadge key={index} className={cx('row-element')} text={item.tag_name} />
    }));

    var abilities = (
        <>
            <h3 style={{ color: abilities[3].abilityScore === 10 ? 'red' : 'inherit' }} className={cx('row-element', 'score')}>{abilities[3].abilityScore}</h3>
            <h3 style={{ color: abilities[0].abilityScore === 10 ? 'red' : 'inherit' }} className={cx('row-element', 'score')}>{abilities[0].abilityScore}</h3>
            <h3 style={{ color: abilities[1].abilityScore === 10 ? 'red' : 'inherit' }} className={cx('row-element', 'score')}>{abilities[1].abilityScore}</h3>
            <h3 style={{ color: abilities[2].abilityScore === 10 ? 'red' : 'inherit' }} className={cx('row-element', 'score')}>{abilities[2].abilityScore}</h3>
            <h3 style={{ color: abilities[4].abilityScore === 10 ? 'red' : 'inherit' }} className={cx('row-element', 'score')}>{abilities[4].abilityScore}</h3>
        </>
    )

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-wrapper-left')}>
                <input type='checkbox' className={cx('row-element', 'checkbox')} />
                <CharThumbnail url={charThumbnail} className={cx('row-element')} />
                <h4 className={cx('row-element', 'character-name')}>{name}</h4>
                {tags}
            </div>
            <div className={cx('inner-wrapper-right')}>
                {abilities}
            </div>
        </div>
    );
}

export default Row;
