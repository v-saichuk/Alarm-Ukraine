import { Golovanivsky } from './District/Golovanivsky';
import { Novoukrainsky } from './District/Novoukrainsky';
import { Kropyvnytskyi } from './District/Kropyvnytskyi';
import { Oleksandrivsky } from './District/Oleksandrivsky';

export const Kirovograd = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Golovanivsky />
        <Novoukrainsky />
        <Kropyvnytskyi />
        <Oleksandrivsky />
    </g>
);
