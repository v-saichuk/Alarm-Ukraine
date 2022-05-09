import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';

import './Social.scss';

const iconStyle = {
    fontSize: '20px',
};

export const Social = () => (
    <div className="social">
        <div className="social__wraper">
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
