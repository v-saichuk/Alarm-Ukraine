import { KyivG } from './District/KyivG';
import { Pripyatsky } from './District/Pripyatsky';
import { Obukhovsky } from './District/Obukhovsky';
import { Vyshgorodsky } from './District/Vyshgorodsky';
import { Buchanskiy } from './District/Buchanskiy';
import { Fastovsky } from './District/Fastovsky';
import { Belotserkovsky } from './District/Belotserkovsky';
import { Boryspilsky } from './District/Boryspilsky';
import { Brovarsky } from './District/Brovarsky';

export const Kyiv = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <KyivG />
        <Pripyatsky />
        <Obukhovsky />
        <Vyshgorodsky />
        <Buchanskiy />
        <Fastovsky />
        <Belotserkovsky />
        <Boryspilsky />
        <Brovarsky />
    </g>
);
