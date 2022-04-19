import { Uzhgorodsky } from './District/Uzhgorodsky';
import { Mukachevskiy } from './District/Mukachevskiy';
import { Khustskiy } from './District/Khustskiy';
import { Beregivsky } from './District/Beregivsky';
import { Tyachivsky } from './District/Tyachivsky';
import { Rakhovsky } from './District/Rakhovsky';

export const Zakarpattya = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Uzhgorodsky />
        <Mukachevskiy />
        <Khustskiy />
        <Beregivsky />
        <Tyachivsky />
        <Rakhovsky />
    </g>
);
