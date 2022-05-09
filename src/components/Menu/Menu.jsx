// Modules
import { useSelector } from 'react-redux';

// Components
import { Settings } from '../Settings/Settings';
import { FullScreen } from '../FullScreen/FullScreen';
import { MinesNav } from '../MinesNav/MinesNav';

// Styles
import './Menu.scss';

export const Menu = () => {
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    return (
        <nav className="menu">
            {!isActiveFullScreen && <MinesNav />}
            {!isActiveFullScreen && <Settings />}
            <FullScreen />
        </nav>
    );
};
