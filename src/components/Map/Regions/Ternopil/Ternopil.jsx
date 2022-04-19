import { Ternopilsky } from './District/Ternopilsky';
import { Kremenets } from './District/Kremenets';
import { Chortkivsky } from './District/Chortkivsky';

export const Ternopil = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Ternopilsky />
        <Kremenets />
        <Chortkivsky />
    </g>
);
