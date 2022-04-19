import { Swativsky } from './District/Swativsky';
import { Starobilsky } from './District/Starobilsky';
import { Severodonetsk } from './District/Severodonetsk';
import { Shchastynsky } from './District/Shchastynsky';
import { Alchevsk } from './District/Alchevsk';
import { Lugansky } from './District/Lugansky';
import { Rovenkovsky } from './District/Rovenkovsky';
import { Dovzhansky } from './District/Dovzhansky';

export const Lugansk = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Swativsky />
        <Starobilsky />
        <Severodonetsk />
        <Shchastynsky />
        <Alchevsk />
        <Lugansky />
        <Rovenkovsky />
        <Dovzhansky />
    </g>
);
