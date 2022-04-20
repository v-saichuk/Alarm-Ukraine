import { Kramatorsk, KramatorskName } from './District/Kramatorsk';
import { Bakhmutsky, BakhmutskyName } from './District/Bakhmutsky';
import { Pokrovsky, PokrovskyName } from './District/Pokrovsky';
import { Gorlevsky, GorlevskyName } from './District/Gorlevsky';
import { Donetskiy, DonetskiyName } from './District/Donetskiy';
import { Volnovasky, VolnovaskyName } from './District/Volnovasky';
import { Kalmiusskiy, KalmiusskiyName } from './District/Kalmiusskiy';
import { Mariupolskiy, MariupolskiyName } from './District/Mariupolskiy';

export const Donetsk = () => (
    <>
        {/* MAP REGIONS */}
        <g fill="#333" stroke="#808080" fillOpacity=".70196">
            <Kramatorsk />
            <Bakhmutsky />
            <Pokrovsky />
            <Gorlevsky />
            <Donetskiy />
            <Volnovasky />
            <Kalmiusskiy />
            <Mariupolskiy />
        </g>
        {/* ./MAP REGIONS */}

        {/* NAME REGIONS */}
        <KramatorskName />
        <BakhmutskyName />
        <PokrovskyName />
        <GorlevskyName />
        <DonetskiyName />
        <VolnovaskyName />
        <KalmiusskiyName />
        <MariupolskiyName />
        {/* ./NAME REGIONS */}

        {/* NAME GLOBAL REGIONS */}
        <g
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeWidth="1.6113"
            transform="scale(.999 1.001)"
            fill="#648ebf"
            fillOpacity=".93726"
            opacity=".85"
            aria-label="Донецька">
            <path d="m4115.1 2000.5h-8.6564v-13.706h-21.51v13.706h-8.6564v-21.575h2.8199q6.7546-17.936 8.6564-40.069h21.903v40.069h5.4431zm-14.362-21.575v-32.232h-5.443q-.8198 7.9679-2.656 16.559-1.8034 8.558-4.2626 15.673z" />
            <path d="m4146.9 1968.4q0 8.9843-3.8036 14.001-3.8035 4.984-10.427 4.984-4.197 0-7.4104-2.2953t-4.9512-6.5907q-1.7378-4.3282-1.7378-10.099 0-8.8859 3.7707-13.87 3.7708-5.0168 10.46-5.0168 6.4595 0 10.263 5.1151 3.8364 5.0824 3.8364 13.772zm-19.411 0q0 5.7054 1.246 8.6236 1.246 2.9183 4.0003 2.9183 5.2463 0 5.2463-11.542 0-5.7382-1.2788-8.558-1.246-2.8527-3.9675-2.8527-2.7543 0-4.0003 2.8527-1.246 2.8198-1.246 8.558z" />
            <path d="m4161.7 1950.2v14.231h9.8696v-14.231h8.7876v36.527h-8.7876v-15.313h-9.8696v15.313h-8.722v-36.527z" />
            <path d="m4201.2 1987.4q-6.8529 0-10.82-4.8529-3.9347-4.8856-3.9347-13.804 0-9.0499 3.5741-14.132 3.574-5.0824 9.9679-5.0824 5.9677 0 9.4106 4.361 3.4429 4.3282 3.4429 12.165v4.6561h-17.542q.098 4.8856 2.0001 7.2792 1.9018 2.3608 5.2463 2.3608 4.2626 0 8.722-2.6559v7.1809q-4.1971 2.5248-10.066 2.5248zm-1.2787-31.15q-1.869 0-3.0822 2.0002-1.2133 1.9673-1.41 6.1316h8.8532q-.066-4.0003-1.2133-6.066-1.1476-2.0658-3.1477-2.0658z" />
            <path d="m4246 1979.9h4.9184v19.87h-8.6892v-13.017h-23.543v-36.527h8.722v29.478h9.804v-29.478h8.7876z" />
            <path d="m4264.1 1964.5h3.0822q7.3121 0 10.755 2.6559 3.4756 2.6559 3.4756 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.7219zm8.3285 10.886q0-2.328-1.4099-3.3445-1.3772-1.0165-4.4266-1.0165h-2.492v9.1811h2.6232q2.7215 0 4.197-1.0821 1.5083-1.1148 1.5083-3.738z" />
            <path d="m4305.1 1950.2h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
            <path d="m4336.6 1986.8-1.7378-4.984h-.1968q-1.9346 3.2133-4.0003 4.4266-2.0657 1.2132-5.2135 1.2132-4.0331 0-6.3611-3.0167-2.2953-3.0166-2.2953-8.3941 0-5.7709 3.1478-8.558 3.1805-2.8199 9.4761-3.115l4.8528-.1967v-2.6232q0-5.1151-4.4265-5.1151-3.279 0-7.5416 2.5576l-3.0166-6.0333q5.443-3.4429 11.837-3.4429 5.8037 0 8.8203 3.3445 3.0494 3.3118 3.0494 9.4106v24.526zm-7.5744-6.1644q2.3937 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.1312q-2.9838.1639-4.3938 1.705-1.3771 1.5411-1.3771 4.5905 0 4.525 3.2133 4.525z" />
        </g>
        {/* NAME GLOBAL REGIONS */}
    </>
);
