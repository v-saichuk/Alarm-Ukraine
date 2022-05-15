import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import './AlarmBlock.scss';

export const AlarmBlock = () => {
    const { isActive, regions } = useSelector((state) => state.alarmStore);
    const [activeRegion, setActiveRegion] = useState([]);

    console.log('useState', [regions]);

    useEffect(() => {
        for (let key in regions) {
            if (regions[key].enabled) {
                setActiveRegion([
                    ...activeRegion,
                    {
                        title: 'Name',
                        startTime: regions[key].enabled_at,
                        active: regions[key].enabled,
                    },
                ]);
            } else {
                for (const ind in regions[key].districts) {
                    if (regions[key].districts[ind].enabled) {
                        setActiveRegion([
                            ...activeRegion,
                            {
                                title: 'name',
                                startTime: regions[key].enabled_at,
                                active: regions[key].enabled,
                            },
                        ]);
                    }
                }
            }
        }
    }, [regions]);

    return (
        <div className={cn('alarm-block', { 'alarm-block--active': isActive })}>
            <div className="alarm-block__wrapper">
                <div className="alarm-block__icon-box">
                    <NotificationsActiveOutlinedIcon
                        fontSize="large"
                        className="alarm-block__icon-alarm"
                    />
                </div>
                <div className="alarm-block__content">
                    <span className="alarm-block__region">Ивано-Франкивска область</span>
                    <div className="alarm-block__time">
                        <AccessTimeIcon className="alarm-block__time-icon" />
                        триває 56 хв.
                    </div>
                </div>
            </div>

            <div className="alarm-block__wrapper">
                <div className="alarm-block__icon-box">
                    <NotificationsActiveOutlinedIcon
                        fontSize="large"
                        className="alarm-block__icon-alarm"
                    />
                </div>
                <div className="alarm-block__content">
                    <span className="alarm-block__region">Киевская область</span>
                    <div className="alarm-block__time">
                        <AccessTimeIcon className="alarm-block__time-icon" />
                        триває 56 хв.
                    </div>
                </div>
            </div>
        </div>
    );
};
