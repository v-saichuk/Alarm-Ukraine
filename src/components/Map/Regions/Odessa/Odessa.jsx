import { Podilsky, PodilskyName } from './District/Podilsky';
import { Berezovsky, BerezovskyName } from './District/Berezovsky';
import { Razdelnyansky, RazdelnyanskyName } from './District/Razdelnyansky';
import { Odessky, OdesskyName } from './District/Odessky';
import { BelgorodDnestrovsky, BelgorodDnestrovskyName } from './District/BelgorodDnestrovsky';
import { Bolgradsky, BolgradskyName } from './District/Bolgradsky';
import { Izmailsky, IzmailskyName } from './District/Izmailsky';

export const Odessa = () => (
    <>
        {/* MAP REGIONS */}
        <g fill="#333" stroke="#808080" fillOpacity=".70196">
            <Podilsky />
            <Berezovsky />
            <Razdelnyansky />
            <Odessky />
            <BelgorodDnestrovsky />
            <Bolgradsky />
            <Izmailsky />
        </g>
        {/* ./MAP REGIONS */}

        {/* NAME REGIONS */}
        <PodilskyName />
        <BerezovskyName />
        <RazdelnyanskyName />
        <OdesskyName />
        <BelgorodDnestrovskyName />
        <BolgradskyName />
        <IzmailskyName />
        {/* ./NAME REGIONS */}

        {/* NAME GLOBAL REGIONS */}
        <g
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeWidth="1.6113"
            transform="scale(.999 1.001)"
            fill="#94ae43"
            fillOpacity=".96471"
            opacity=".85"
            aria-label="Одеська">
            <path d="m2021.3 2679.9q0 11.903-4.4593 18.296-4.4594 6.3939-12.755 6.3939-8.3285 0-12.788-6.3611-4.4594-6.394-4.4594-18.395 0-11.902 4.4594-18.231 4.4594-6.3611 12.854-6.3611 8.2957 0 12.722 6.3939 4.4266 6.3611 4.4266 18.264zm-25.346 0q0 8.1973 2.0657 12.493 2.0658 4.2954 6.0661 4.2954 8.0662 0 8.0662-16.788t-8.0006-16.788q-4.0659 0-6.1317 4.2954-2.0657 4.2627-2.0657 12.493z" />
            <path d="m2045.4 2697.1v-22.756h-4.2954q-1.246 14.165-4.7545 22.756zm13.575 19.87h-8.6564v-13.017h-16.657v13.017h-8.6564v-19.87h2.1969q2.6232-5.279 4.1643-12.919 1.5411-7.6399 1.9673-16.755h20.887v29.674h4.7544z" />
            <path d="m2077.1 2704.6q-6.853 0-10.82-4.8528-3.9348-4.8856-3.9348-13.804 0-9.0498 3.5741-14.132 3.574-5.0823 9.968-5.0823 5.9676 0 9.4105 4.3609 3.4429 4.3283 3.4429 12.165v4.6561h-17.542q.098 4.8856 2.0001 7.2793 1.9018 2.3608 5.2463 2.3608 4.2627 0 8.722-2.6559v7.1808q-4.197 2.5248-10.066 2.5248zm-1.2788-31.15q-1.869 0-3.0822 2.0001-1.2132 1.9674-1.41 6.1317h8.8532q-.066-4.0003-1.2132-6.0661-1.1477-2.0657-3.1478-2.0657z" />
            <path d="m2106.6 2704.6q-6.525 0-9.9351-4.7544-3.4101-4.7545-3.4101-13.968 0-9.6401 3.2133-14.395 3.2462-4.7544 10.001-4.7544 2.0329 0 4.2626.5902t4.0003 1.705l-2.492 6.7874q-2.7215-1.6067-4.82-1.6067-2.7871 0-4.0331 2.9183-1.2132 2.8855-1.2132 8.6892 0 5.6726 1.2132 8.4924 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2952v7.6727q-3.4429 2.1313-7.6072 2.1313z" />
            <path d="m2128.1 2681.7h3.0822q7.312 0 10.755 2.656 3.4757 2.6559 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.722zm8.3285 10.886q0-2.328-1.41-3.3445-1.3771-1.0165-4.4265-1.0165h-2.492v9.181h2.6231q2.7216 0 4.1971-1.082 1.5083-1.1148 1.5083-3.738z" />
            <path d="m2169.2 2667.4h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.7219v-36.527h8.7219v17.444z" />
            <path d="m2200.7 2703.9-1.7379-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266-2.0658 1.2132-5.2135 1.2132-4.0331 0-6.3612-3.0166-2.2953-3.0166-2.2953-8.3941 0-5.7709 3.1478-8.558 3.1806-2.8199 9.4762-3.115l4.8528-.1968v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5415 2.5576l-3.0167-6.0332q5.4431-3.4429 11.837-3.4429 5.8037 0 8.8204 3.3445 3.0494 3.3117 3.0494 9.4106v24.526zm-7.5744-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7381v-3.0822l-2.6887.1311q-2.9839.164-4.3938 1.7051-1.3772 1.5411-1.3772 4.5905 0 4.5249 3.2134 4.5249z" />
        </g>
        {/* ./NAME GLOBAL REGIONS */}
    </>
);
