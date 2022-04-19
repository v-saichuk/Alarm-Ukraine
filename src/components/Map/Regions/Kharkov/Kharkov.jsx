import { Kharkovskiy } from './District/Kharkovskiy';
import { Bohodukhivsky } from './District/Bohodukhivsky';
import { Chuguevsky } from './District/Chuguevsky';
import { Kupyansky } from './District/Kupyansky';
import { Krasnogradsky } from './District/Krasnogradsky';
import { Lozovsky } from './District/Lozovsky';
import { Izyumsky } from './District/Izyumsky';

export const Kharkov = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Kharkovskiy />
        <Bohodukhivsky />
        <Chuguevsky />
        <Kupyansky />
        <Krasnogradsky />
        <Lozovsky />
        <Izyumsky />
    </g>
);
