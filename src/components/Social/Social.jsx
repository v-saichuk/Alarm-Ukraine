import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { onArrow } from '../../store/slice/SettingsSlice';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Button } from '@material-ui/core';

import './Social.scss';

const iconStyle = {
    fontSize: '20px',
};

export const Social = () => {
    const dispatch = useDispatch();
    const { isArrow } = useSelector((state) => state.settingsStore);

    return (
        <div className="social">
            <div className="social__wraper">
                <Button
                    onClick={() => dispatch(onArrow())}
                    variant="outlined"
                    className="social__btn social__btn--arrow">
                    <DoubleArrowIcon
                        style={iconStyle}
                        className={cn({ 'social__btn--arrow_active': isArrow })}
                    />
                </Button>
                <Button variant="outlined" className="social__btn social__btn--fb">
                    <FacebookIcon style={iconStyle} />
                </Button>
                <Button variant="outlined" className="social__btn social__btn--tw">
                    <TwitterIcon style={iconStyle} />
                </Button>
                <Button variant="outlined" className="social__btn social__btn--tg">
                    <TelegramIcon style={iconStyle} />
                </Button>
                <Button variant="outlined" className="social__btn social__btn--in">
                    <LinkedInIcon style={iconStyle} />
                </Button>
            </div>
        </div>
    );
};
