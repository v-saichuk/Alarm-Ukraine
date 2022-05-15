// Modules
import { useSelector } from 'react-redux';

// Components
import { Settings } from '../Settings/Settings';
import { FullScreen } from '../FullScreen/FullScreen';
import { MinesNav } from '../MinesNav/MinesNav';
import { AlarmNav } from '../AlarmText/AlarmNav/AlarmNav';

// Styles
import './Menu.scss';

export const Menu = () => {
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    return (
        <nav className="menu">
            {!isActiveFullScreen && <AlarmNav />}
            {!isActiveFullScreen && <MinesNav />}
            {!isActiveFullScreen && <Settings />}
            <FullScreen />
        </nav>
    );
};
