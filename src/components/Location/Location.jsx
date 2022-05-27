import { useSelector } from 'react-redux';
// Components
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';

// Styles
import './Location.scss';

export const Location = ({ x, y, text = 'Подсказка...' }) => {
    const { themeColor } = useSelector((state) => state.settingsStore);

    const HtmlTooltip = withStyles(() => ({
        tooltip: {
            maxWidth: 230,
            fontSize: '10px',
        },
    }))(Tooltip);

    return (
        <HtmlTooltip title={<span>{text}</span>} arrow placement="top" TransitionComponent={Zoom}>
            <g style={{ cursor: 'pointer' }}>
                <circle cx={x} cy={y} r="40" fill={themeColor ? '#fff' : '#ffdd00'} />
                <circle cx={x} cy={y} r="20" fill="#4d9cff" />
            </g>
        </HtmlTooltip>
    );
};
