// Modules
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Styles
import './Logo.scss';

export const Logo = () => {
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    return (
        <h1 className={cn('logo', { logo__hidden: isActiveFullScreen })}>
            <span className="logo__blue">Alarm</span>-<span className="logo__yellow">Ukraine</span>
        </h1>
    );
};
