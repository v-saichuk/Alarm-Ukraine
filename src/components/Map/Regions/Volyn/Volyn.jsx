import { Kovelsky } from './District/Kovelsky';
import { KamenKashirskiy } from './District/KamenKashirskiy';
import { VolodymyrVolinsky } from './District/VolodymyrVolinsky';
import { Lutsky } from './District/Lutsky';

export const Volyn = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Kovelsky />
        <KamenKashirskiy />
        <VolodymyrVolinsky />
        <Lutsky />
    </g>
);
