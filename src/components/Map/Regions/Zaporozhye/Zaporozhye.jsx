import { Zaporozhskaya } from './District/Zaporozhskaya';
import { Vasilevsky } from './District/Vasilevsky';
import { Pologovsky } from './District/Pologovsky';
import { Berdiansky } from './District/Berdiansky';
import { Melitopolskiy } from './District/Melitopolskiy';

export const Zaporozhye = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Zaporozhskaya />
        <Vasilevsky />
        <Pologovsky />
        <Berdiansky />
        <Melitopolskiy />
    </g>
);
