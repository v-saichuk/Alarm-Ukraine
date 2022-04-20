import { Nikolaevsky, NikolaevskyName } from './District/Nikolaevsky';
import { Bashtansky, BashtanskyName } from './District/Bashtansky';
import { Voznesensky, VoznesenskyName } from './District/Voznesensky';
import { Pervomaisky, PervomaiskyName } from './District/Pervomaisky';

export const Nikolaev = () => (
    <>
        {/* MAP REGIONS */}
        <g fill="#333" stroke="#808080" fillOpacity=".70196">
            <Nikolaevsky />
            <Bashtansky />
            <Voznesensky />
            <Pervomaisky />
        </g>
        {/* ./MAP REGIONS */}

        {/* NAME REGIONS */}
        <NikolaevskyName />
        <BashtanskyName />
        <VoznesenskyName />
        <PervomaiskyName />
        {/* ./NAME REGIONS */}

        {/* NAME GLOBAL REGIONS */}
        <g
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeWidth="1.6113"
            transform="scale(.999 1.001)"
            fill="#ce6c6c"
            fillOpacity=".87843"
            opacity=".85"
            aria-label="Миколаївська">
            <path d="m2530.2 2256.5-9.1155-40.823h-.3607q.623 4.7217.623 8.6564v32.166h-8.2629v-47.938h13.706l8.1973 37.675h.2623l8.1318-37.675h13.903v47.938h-8.4596v-32.494q0-4.0331.459-8.2629h-.2623l-9.0827 40.757z" />
            <path d="m2573.4 2219.9v16.919q0 3.1478-.7869 10.46l11.87-27.379h10.689v36.527h-8.1318v-17.182q0-3.8692.7542-10.427l-11.903 27.609h-10.591v-36.527z" />
            <path d="m2620.6 2219.9h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
            <path d="m2660.6 2238.1q0 8.9843-3.8035 14.001-3.8036 4.984-10.427 4.984-4.197 0-7.4104-2.2953-3.2133-2.2952-4.9512-6.5906-1.7378-4.3282-1.7378-10.099 0-8.8859 3.7708-13.87 3.7708-5.0168 10.46-5.0168 6.4595 0 10.263 5.1152 3.8363 5.0823 3.8363 13.772zm-19.411 0q0 5.7054 1.246 8.6236 1.246 2.9183 4.0003 2.9183 5.2463 0 5.2463-11.542 0-5.7381-1.2788-8.558-1.246-2.8527-3.9675-2.8527-2.7543 0-4.0003 2.8527-1.246 2.8199-1.246 8.558z" />
            <path d="m2693.2 2256.5h-8.7548v-29.478h-4.8856q-.6558 11.116-2.1313 17.641-1.4427 6.5251-3.9019 9.4762-2.4264 2.951-6.4595 2.951-2.4593 0-4.0331-.7213v-7.1809q.9836.3279 2.0001.3279 2.7543 0 4.2954-7.017 1.5411-7.0497 2.3609-22.526h21.51z" />
            <path d="m2718.5 2256.5-1.7378-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266-2.0658 1.2132-5.2136 1.2132-4.0331 0-6.3611-3.0166-2.2953-3.0167-2.2953-8.3941 0-5.771 3.1478-8.5581 3.1806-2.8198 9.4762-3.1149l4.8528-.1968v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5415 2.5576l-3.0167-6.0333q5.4431-3.4428 11.837-3.4428 5.8037 0 8.8204 3.3445 3.0494 3.3117 3.0494 9.4105v24.526zm-7.5743-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.1312q-2.9839.1639-4.3938 1.705-1.3772 1.5411-1.3772 4.5906 0 4.5249 3.2134 4.5249z" />
            <path d="m2740.7 2256.5h-8.722v-36.527h8.722zm-15.083-46.004q0-2.0002 1.1477-3.115 1.1476-1.1149 3.1805-1.1149 2.033 0 3.1806 1.1805 1.1804 1.1476 1.1804 3.0494 0 1.869-1.1804 3.0166-1.1476 1.1476-3.1806 1.1476-2.0329 0-3.1805-1.082-1.1477-1.1149-1.1477-3.0822zm13.05 0q0-1.9674 1.1476-3.0822 1.1477-1.1477 3.2134-1.1477 2.0002 0 3.1806 1.1149 1.1804 1.1148 1.1804 3.115 0 1.9345-1.1804 3.0494-1.1477 1.1148-3.1806 1.1148t-3.2134-1.1148q-1.1476-1.1476-1.1476-3.0494z" />
            <path d="m2774.3 2229.4q0 3.0823-1.8362 5.148-1.8034 2.0329-5.2791 2.6231v.2624q3.8364.4918 6.0005 2.6559 2.1969 2.1313 2.1969 5.5414 0 5.2463-3.7052 8.0334t-10.591 2.7871h-12.821v-36.527h12.755q13.28 0 13.28 9.4761zm-7.9678 15.706q0-2.3281-1.5083-3.3445-1.5083-1.0165-4.5577-1.0165h-3.279v9.181h3.4101q5.9349 0 5.9349-4.82zm-.9509-14.919q0-3.6068-4.7872-3.6068h-3.6069v7.7055h2.6232q2.8854 0 4.3282-.9181 1.4427-.9509 1.4427-3.1806z" />
            <path d="m2792.8 2257.1q-6.5251 0-9.9352-4.7545-3.4101-4.7544-3.4101-13.968 0-9.64 3.2134-14.394 3.2462-4.7545 10.001-4.7545 2.0329 0 4.2626.5902 2.2297.5903 4.0003 1.7051l-2.492 6.7874q-2.7215-1.6067-4.82-1.6067-2.7871 0-4.0331 2.9183-1.2132 2.8854-1.2132 8.6892 0 5.6725 1.2132 8.4924 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2952v7.6727q-3.4429 2.1313-7.6072 2.1313z" />
            <path d="m2814.4 2234.2h3.0822q7.312 0 10.755 2.6559 3.4757 2.656 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.722zm8.3285 10.886q0-2.3281-1.41-3.3445-1.3771-1.0165-4.4265-1.0165h-2.492v9.181h2.6231q2.7215 0 4.1971-1.082 1.5083-1.1149 1.5083-3.738z" />
            <path d="m2855.4 2219.9h9.1811l-10.001 17.313 10.624 19.215h-9.6072l-9.5418-18.788v18.788h-8.7219v-36.527h8.7219v17.444z" />
            <path d="m2886.9 2256.5-1.7379-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266-2.0658 1.2132-5.2135 1.2132-4.0331 0-6.3612-3.0166-2.2952-3.0167-2.2952-8.3941 0-5.771 3.1477-8.5581 3.1806-2.8198 9.4762-3.1149l4.8528-.1968v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5415 2.5576l-3.0167-6.0333q5.4431-3.4428 11.837-3.4428 5.8037 0 8.8204 3.3445 3.0494 3.3117 3.0494 9.4105v24.526zm-7.5744-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.1312q-2.9839.1639-4.3938 1.705-1.3772 1.5411-1.3772 4.5906 0 4.5249 3.2134 4.5249z" />
        </g>
        {/* ./NAME GLOBAL REGIONS */}
    </>
);
