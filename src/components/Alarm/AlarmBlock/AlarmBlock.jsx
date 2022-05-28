import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { lengthInterval } from '../../../functions/lengthInterval';
import { addedActiveRegions, clearActiveRegions } from '../../../store/slice/RegionsSlice';

import './AlarmBlock.scss';

export const AlarmBlock = () => {
    const dispatch = useDispatch();
    const { isActive, regions, activeRegions } = useSelector((state) => state.alarmStore);
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    useEffect(() => {
        // Полностью очищаем массив активных сирен
        dispatch(clearActiveRegions());

        // Преобразуем обьект в масив и сделаем перебор на активных регион и отправим в новый масив стейта.
        Object.entries(regions).filter((el) =>
            el[1].enabled
                ? dispatch(addedActiveRegions(el))
                : el[1].districts &&
                  Object.entries(el[1].districts).filter(
                      (elm) => elm[1].enabled && dispatch(addedActiveRegions(elm)),
                  ),
        );
    }, [regions, dispatch]);

    return (
        <div
            className={cn('alarm-block', {
                'alarm-block--active': !isActive && !isActiveFullScreen,
            })}>
            {activeRegions.map((item) => {
                const { hour, minute } = lengthInterval(new Date(item[1].enabled_at), new Date());

                return (
                    <div key={item[0]} className="alarm-block__wrapper">
                        <div className="alarm-block__icon-box">
                            <NotificationsActiveOutlinedIcon
                                fontSize="large"
                                className="alarm-block__icon-alarm"
                            />
                        </div>
                        <div className="alarm-block__content">
                            <span className="alarm-block__region">{item[0]}</span>
                            <div className="alarm-block__time">
                                <AccessTimeIcon className="alarm-block__time-icon" />
                                триває {hour > 0 && hour + ' годин'} {minute} хв.
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
