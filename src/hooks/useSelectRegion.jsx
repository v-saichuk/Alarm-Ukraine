import { useSelector } from 'react-redux';

export const useSelectRegion = (region, district) => {
    const { enabled } = useSelector((state) =>
        !district
            ? state.alarmStore.regions[region]
            : state.alarmStore.regions[region].districts[district],
    );

    return enabled;
};

// Київська область
