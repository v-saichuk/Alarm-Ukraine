import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import './Settings.scss';

export const Settings = () => (
    <div className="settings">
        <IconButton className="settings__btn" aria-label="Settings">
            <SettingsIcon className="settings__icon" />
        </IconButton>
    </div>
);
