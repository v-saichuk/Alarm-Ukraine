import { Vinitsky } from './District/Vinitsky';
import { Khmelnitsky } from './District/Khmelnitsky';
import { Zhmerinsky } from './District/Zhmerinsky';
import { MogilevPodolsk } from './District/MogilevPodolsk';
import { Tulchinsky } from './District/Tulchinsky';
import { Gaysinsky } from './District/Gaysinsky';

export const Vinnitsa = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Vinitsky />
        <Khmelnitsky />
        <Zhmerinsky />
        <MogilevPodolsk />
        <Tulchinsky />
        <Gaysinsky />
    </g>
);
