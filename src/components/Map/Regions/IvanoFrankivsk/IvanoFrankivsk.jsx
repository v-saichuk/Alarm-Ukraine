import { Kalusky } from './District/Kalusky';
import { IvanoFrankivskiy } from './District/IvanoFrankivskiy';
import { Kolomoisky } from './District/Kolomoisky';
import { Nadvirnyansky } from './District/Nadvirnyansky';
import { Kosivsky } from './District/Kosivsky';
import { Verkhovinsky } from './District/Verkhovinsky';

export const IvanoFrankivsk = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Kalusky />
        <IvanoFrankivskiy />
        <Kolomoisky />
        <Nadvirnyansky />
        <Kosivsky />
        <Verkhovinsky />
    </g>
);
