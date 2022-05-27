// Modules
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Components
import { Settings } from '../Settings/Settings';
import { FullScreen } from '../FullScreen/FullScreen';
import { MinesNav } from '../MinesNav/MinesNav';
import { AlarmNav } from '../Alarm/AlarmNav/AlarmNav';
import { ThemeColor } from '../ThemeColor/ThemeColor';

// Styles
import './Menu.scss';

export const Menu = () => {
    const { isActiveFullScreen, themeColor } = useSelector((state) => state.settingsStore);

    return (
        <nav className={cn('menu', { 'menu--white': !themeColor })}>
            {/* {!isActiveFullScreen && <ThemeColor />} */}
            {!isActiveFullScreen && <AlarmNav />}
            {!isActiveFullScreen && <MinesNav />}
            {!isActiveFullScreen && <Settings />}

            <FullScreen />
        </nav>
    );
};
