// COMPONENTS
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

// STYLES
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
        </header>
    );
};
