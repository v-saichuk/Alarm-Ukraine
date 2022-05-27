// Modules
import { useDispatch, useSelector } from 'react-redux';
import { handleFullScreen } from '../../store/slice/SettingsSlice';

// Components
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

// Styles
import './FullScreen.scss';

export const FullScreen = () => {
    const dispatch = useDispatch();
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    return (
        <div className="fullscreen">
            <IconButton
                className="fullscreen__btn"
                aria-label="Settings"
                onClick={() => dispatch(handleFullScreen())}>
                {isActiveFullScreen ? (
                    <FullscreenExitIcon className="fullscreen__icon" />
                ) : (
                    <FullscreenIcon className="fullscreen__icon" />
                )}
            </IconButton>
        </div>
    );
};
