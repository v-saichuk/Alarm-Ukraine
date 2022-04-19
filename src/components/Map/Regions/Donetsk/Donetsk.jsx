import { Kramatorsk } from './District/Kramatorsk';
import { Bakhmutsky } from './District/Bakhmutsky';
import { Pokrovsky } from './District/Pokrovsky';
import { Gorlevsky } from './District/Gorlevsky';
import { Donetskiy } from './District/Donetskiy';
import { Volnovasky } from './District/Volnovasky';
import { Kalmiusskiy } from './District/Kalmiusskiy';
import { Mariupolskiy } from './District/Mariupolskiy';

export const Donetsk = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Kramatorsk />
        <Bakhmutsky />
        <Pokrovsky />
        <Gorlevsky />
        <Donetskiy />
        <Volnovasky />
        <Kalmiusskiy />
        <Mariupolskiy />
    </g>
);
