import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { lengthInterval } from '../../../functions/lengthInterval';
import { addedActiveRegions } from '../../../store/slice/RegionsSlice';

import './AlarmBlock.scss';

export const AlarmBlock = () => {
    const dispatch = useDispatch();
    const { isActive, regions, activeRegions } = useSelector((state) => state.alarmStore);
    const { isActiveFullScreen } = useSelector((state) => state.settingsStore);

    // TODO: Не отображаются регионы

    useEffect(() => {
        Object.entries(regions).filter((el) => {
            if (el[1].enabled) {
                console.log('=>>>>>>>>>', el);
                dispatch(addedActiveRegions(el));
            } else {
                // el[1].districts &&
                //     Object.entries(el[1].districts).filter((elm) => {
                //         // console.log(elm);
                //         elm[1].enabled && dispatch(addedActiveRegions(elm));
                //     });
            }
        });

        // for (const key in regions) {
        //     if (regions[key].enabled) {
        //         // console.log(regions[key]);
        //         // console.log(activeRegions.filter((el) => el[0] === regions[key]));
        //     }
        // }
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
