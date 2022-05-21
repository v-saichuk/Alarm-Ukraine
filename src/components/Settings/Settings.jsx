import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux';
import { alarmFetch } from '../../store/slice/RegionsSlice';

import './Settings.scss';

export const Settings = () => {
    const dispatch = useDispatch();

    return (
        <div className="settings">
            <IconButton
                onClick={() => dispatch(alarmFetch())}
                className="settings__btn"
                aria-label="Settings">
                <SettingsIcon className="settings__icon" />
            </IconButton>
        </div>
    );
};
