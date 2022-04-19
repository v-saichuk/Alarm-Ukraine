import { Zhitomirskiy } from './District/Zhitomirskiy';
import { Berdichevsky } from './District/Berdichevsky';
import { NovogradVolynsky } from './District/NovogradVolynsky';
import { Korostensky } from './District/Korostensky';

export const Zhytomyr = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Zhitomirskiy />
        <Berdichevsky />
        <NovogradVolynsky />
        <Korostensky />
    </g>
);
