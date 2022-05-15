import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { onActive } from '../../../store/slice/RegionsSlice';

import IconButton from '@material-ui/core/IconButton';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Badge from '@material-ui/core/Badge';

import './AlarmNav.scss';

export const AlarmNav = () => {
    const dispatch = useDispatch();
    const { isActive } = useSelector((state) => state.alarmStore);

    return (
        <IconButton
            className="alarm-nav__btn"
            aria-label="AlarmNav"
            onClick={() => dispatch(onActive(!isActive))}>
            <Badge badgeContent={4} color="error">
                <NotificationImportantIcon
                    className={cn('alarm-nav__icon', { 'alarm-nav--active': isActive })}
                />
            </Badge>
        </IconButton>
    );
};
