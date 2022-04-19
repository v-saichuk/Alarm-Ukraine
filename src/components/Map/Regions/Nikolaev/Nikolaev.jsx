import { Nikolaevsky } from './District/Nikolaevsky';
import { Bashtansky } from './District/Bashtansky';
import { Voznesensky } from './District/Voznesensky';
import { Pervomaisky } from './District/Pervomaisky';

export const Nikolaev = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Nikolaevsky />
        <Bashtansky />
        <Voznesensky />
        <Pervomaisky />
    </g>
);
