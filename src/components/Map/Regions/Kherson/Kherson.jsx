import { Berislavsky } from './District/Berislavsky';
import { Khersonskiy } from './District/Khersonskiy';
import { Kakhovsky } from './District/Kakhovsky';
import { Genichesk } from './District/Genichesk';
import { Skadovsky } from './District/Skadovsky';

export const Kherson = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Berislavsky />
        <Khersonskiy />
        <Kakhovsky />
        <Genichesk />
        <Skadovsky />
    </g>
);
