// Modules
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Styles
import './Logo.scss';

export const Logo = () => {
    const { isActiveFullScreen, themeColor } = useSelector((state) => state.settingsStore);

    return (
        <h1 className={cn('logo', { logo__hidden: isActiveFullScreen })}>
            <span className="logo__blue">Alarm</span>
            <span className={cn(!themeColor && 'logo__hyphen')}>-</span>
            <span className={cn(themeColor ? 'logo__yellow' : 'logo__orange')}>Ukraine</span>
        </h1>
    );
};
