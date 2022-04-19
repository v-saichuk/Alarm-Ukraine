import { Podilsky } from './District/Podilsky';
import { Berezovsky } from './District/Berezovsky';
import { Razdelnyansky } from './District/Razdelnyansky';
import { Odessky } from './District/Odessky';
import { BelgorodDnestrovsky } from './District/BelgorodDnestrovsky';
import { Bolgradsky } from './District/Bolgradsky';
import { Izmailsky } from './District/Izmailsky';

export const Odessa = () => (
    <g fill="#333" stroke="#808080" fillOpacity=".70196">
        <Podilsky />
        <Berezovsky />
        <Razdelnyansky />
        <Odessky />
        <BelgorodDnestrovsky />
        <Bolgradsky />
        <Izmailsky />
    </g>
);
