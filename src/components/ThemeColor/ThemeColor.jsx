import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import { onThemeColor } from '../../store/slice/SettingsSlice';
import cn from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

import './ThemeColor.scss';

export const ThemeColor = () => {
    const dispatch = useDispatch();
    const { themeColor } = useSelector((state) => state.settingsStore);

    return (
        // TODO: Баг, при скрытии всех окошек с экрана, меняется цвет body
        <div className="theme-color">
            {/* Изменения цвета body */}
            <Helmet bodyAttributes={{ style: !themeColor && 'background-color: #fff' }} />
            <IconButton
                onClick={() => dispatch(onThemeColor())}
                className="theme-color__btn"
                aria-label="Theme Color">
                {themeColor ? (
                    <BrightnessHighIcon className="theme-color__icon" />
                ) : (
                    <BrightnessLowIcon className="theme-color__icon theme-color__icon--dark" />
                )}
            </IconButton>
        </div>
    );
};
