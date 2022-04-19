import { Poltavskiy } from './District/Poltavskiy';
import { Kremenchuksky } from './District/Kremenchuksky';
import { Lubensky } from './District/Lubensky';
import { Mirgorodsky } from './District/Mirgorodsky';

export const Poltava = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Poltavskiy />
        <Kremenchuksky />
        <Lubensky />
        <Mirgorodsky />
    </g>
);
