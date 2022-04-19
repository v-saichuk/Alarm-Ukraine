import { Lvivsky } from './District/Lvivsky';
import { Striysky } from './District/Striysky';
import { Drogobitsky } from './District/Drogobitsky';
import { Sambirsky } from './District/Sambirsky';
import { Yavorivsky } from './District/Yavorivsky';
import { Zolochevsky } from './District/Zolochevsky';
import { Chervonogradsky } from './District/Chervonogradsky';

export const Lviv = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Lvivsky />
        <Striysky />
        <Drogobitsky />
        <Sambirsky />
        <Yavorivsky />
        <Zolochevsky />
        <Chervonogradsky />
    </g>
);
