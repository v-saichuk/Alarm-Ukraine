import { Rovnensky } from './District/Rovnensky';
import { Dubensky } from './District/Dubensky';
import { Sarnenskiy } from './District/Sarnenskiy';
import { Varassky } from './District/Varassky';

export const Rivne = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Rovnensky />
        <Dubensky />
        <Sarnenskiy />
        <Varassky />
    </g>
);
