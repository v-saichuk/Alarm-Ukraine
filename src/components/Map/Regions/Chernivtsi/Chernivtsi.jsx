import { Chernivetsky } from './District/Chernivetsky';
import { Vizhnitsky } from './District/Vizhnitsky';
import { Dniester } from './District/Dniester';

export const Chernivtsi = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Chernivetsky />
        <Vizhnitsky />
        <Dniester />
    </g>
);
