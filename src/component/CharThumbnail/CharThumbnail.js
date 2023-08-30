import classNames from 'classnames/bind';
import styles from './CharThumbnail.module.scss';

const cx = classNames.bind(styles);

function CharThumbnail(props) {

    const setThumbnailUrl = () => {
        return {
            backgroundImage: `url(${props.url}`
        }
    };

    return (
        <div style={setThumbnailUrl()} className={cx('wrapper', props.className)}>
        </div>
    );
}

export default CharThumbnail;
