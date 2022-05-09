// Modules
import { useSelector } from 'react-redux';

// Components
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';

const DEFAULT_COLOR = '#fff';

const HtmlTooltip = withStyles(() => ({
    tooltip: {
        maxWidth: 230,
        fontSize: '10px',
    },
}))(Tooltip);

export const Mines = ({ x, y, text = 0 }) => {
    const { isActiveMinins } = useSelector((state) => state.settingsStore);

    if (!isActiveMinins) {
        return null;
    }
    return (
        <>
            <HtmlTooltip
                title={`Обстежено територій ${text} (га)`}
                arrow
                placement="top"
                TransitionComponent={Zoom}>
                <text x={x + 90} y={y + 55} fill="#fff" fontSize="50" style={{ cursor: 'pointer' }}>
                    {text}
                </text>
            </HtmlTooltip>
            <svg
                width="74"
                height="74"
                viewBox="0 0 24 24"
                fill="none"
                x={x}
                y={y}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 14.8763C3.28131 14.5447 6.28902 13.9075 8.06936 14.0113C10.2948 14.1411 14.9075 14.8763 16.7688 14.8763C18.2578 14.8763 19 14.8763 22 14.0113M3.78035 18.5991C4.30636 18.1665 6.00578 18.3222 6.32948 18.5991C6.7341 18.9451 7.13873 20.1561 7.01734 20.4156C6.89595 20.6751 5.19653 22.362 4.30636 21.9294C3.59422 21.5834 3.05202 19.3776 3.78035 18.5991ZM10.6994 17.904C10.578 18.596 11.0555 19.0371 11.8324 19.2448C12.8035 19.5043 13.6127 19.2015 13.6532 18.6825C13.6936 18.1635 13.289 17.6012 12.5607 17.4282C11.978 17.2898 10.8613 17.2984 10.6994 17.904ZM16.3237 19.1181C15.7977 19.8534 15.8301 20.9866 16.6069 21.1942C17.578 21.4537 18.185 20.9779 18.5491 20.3724C18.8126 19.9343 18.9133 18.8153 18.185 18.6423C17.6023 18.5039 16.9306 18.5558 16.3237 19.1181Z"
                    stroke={DEFAULT_COLOR}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <rect
                    x="5.75"
                    y="8.75"
                    width="13.5"
                    height="2.5"
                    rx="1.25"
                    stroke={DEFAULT_COLOR}
                    strokeWidth="1.5"
                />
                <path
                    d="M10.75 7.5C10.75 6.5335 11.5335 5.75 12.5 5.75C13.4665 5.75 14.25 6.5335 14.25 7.5V8.25H10.75V7.5Z"
                    stroke={DEFAULT_COLOR}
                    strokeWidth="1.5"
                />
                <path
                    d="M11.9199 3.48698C12.127 3.12826 12.5857 3.00536 12.9444 3.21246C13.3032 3.41957 13.4261 3.87826 13.219 4.23698L11.594 7.05156L10.2949 6.30156L11.9199 3.48698Z"
                    fill={DEFAULT_COLOR}
                />
                <path
                    d="M14.625 3.48698C14.8321 3.12826 15.2908 3.00536 15.6495 3.21246C16.0082 3.41957 16.1311 3.87826 15.924 4.23698L14.299 7.05156L13 6.30156L14.625 3.48698Z"
                    fill={DEFAULT_COLOR}
                />
            </svg>
        </>
    );
};
