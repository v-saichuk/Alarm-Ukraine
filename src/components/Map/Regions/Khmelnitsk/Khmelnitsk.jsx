import { Khmelnitsky } from './District/Khmelnitsky';
import { Shepetovsky } from './District/Shepetovsky';
import { KamyanetsPodilskiy } from './District/KamyanetsPodilskiy';

export const Khmelnitsk = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Khmelnitsky />
        <Shepetovsky />
        <KamyanetsPodilskiy />
    </g>
);
