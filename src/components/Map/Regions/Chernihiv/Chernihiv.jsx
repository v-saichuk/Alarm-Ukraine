import { Chernigovskiy } from './District/Chernigovskiy';
import { Nezhinsky } from './District/Nezhinsky';
import { Prilutsky } from './District/Prilutsky';
import { Koryukovsky } from './District/Koryukovsky';
import { NovgorodSeversky } from './District/NovgorodSeversky';

export const Chernihiv = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Chernigovskiy />
        <Nezhinsky />
        <Prilutsky />
        <Koryukovsky />
        <NovgorodSeversky />
    </g>
);
