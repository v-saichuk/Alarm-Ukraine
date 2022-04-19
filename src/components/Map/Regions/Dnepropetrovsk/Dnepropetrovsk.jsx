import { Dneprovskiy } from './District/Dneprovskiy';
import { Kamyansky } from './District/Kamyansky';
import { Krivorozhskiy } from './District/Krivorozhskiy';
import { Nikopolsky } from './District/Nikopolsky';
import { Novomoskovsky } from './District/Novomoskovsky';
import { Pavlogradsky } from './District/Pavlogradsky';
import { Sinelnikovsky } from './District/Sinelnikovsky';

export const Dnepropetrovsk = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Dneprovskiy />
        <Kamyansky />
        <Krivorozhskiy />
        <Nikopolsky />
        <Novomoskovsky />
        <Pavlogradsky />
        <Sinelnikovsky />
    </g>
);
