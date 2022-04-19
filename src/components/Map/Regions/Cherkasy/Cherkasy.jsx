import { Cherkassky } from './District/Cherkassky';
import { Zolotonisky } from './District/Zolotonisky';
import { Zvenigorodsky } from './District/Zvenigorodsky';
import { Umansky } from './District/Umansky';

export const Cherkasy = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Cherkassky />
        <Zolotonisky />
        <Zvenigorodsky />
        <Umansky />
    </g>
);
