// Modules
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Components
import { Social } from '../Social/Social';

// Styles
import './Information.scss';

export const Information = () => {
    const { isActiveFullScreen, themeColor, isArrow } = useSelector((state) => state.settingsStore);
    const { isLoading } = useSelector((state) => state.MinesSlice);

    return (
        <div className="information">
            <div
                className={cn('information__container', {
                    information__container__hidden: isActiveFullScreen,
                    'information__container--arrow': isArrow,
                })}>
                <Social />
                <div
                    className={cn('information__wrapper', {
                        'information__wrapper--white': !themeColor,
                    })}>
                    <ul className="information__list">
                        <li className="information__item">
                            <span className="information__color information__alarm"></span>
                            Повітряна тривога
                        </li>
                        <li className="information__item">
                            <span className="information__color information__no-alarm"></span> Немає
                            тривоги
                        </li>
                        <li className="information__item">
                            <span className="information__color information__no-info"></span> Немає
                            інформації
                        </li>
                        <li className="information__item">
                            <span className="information__color information__good"></span> Славетні
                            місця
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
