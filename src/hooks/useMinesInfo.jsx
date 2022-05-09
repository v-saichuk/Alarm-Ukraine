import { useSelector } from 'react-redux';

export const useMinesInfo = (region) => {
    const { regions } = useSelector((state) => state.MinesSlice.mines);

    const [{ statistics }] = regions.filter((el) => el.region_name === region);

    return { day: statistics.day, total: statistics.total };
};
