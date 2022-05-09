import { Kyiv } from './Regions/Kyiv/Kyiv';
import { Chernihiv } from './Regions/Chernihiv/Chernihiv';
import { Volyn } from './Regions/Volyn/Volyn';
import { Zhytomyr } from './Regions/Zhytomyr/Zhytomyr';
import { Lviv } from './Regions/Lviv/Lviv';
import { Zakarpattya } from './Regions/Zakarpattya/Zakarpattya';
import { IvanoFrankivsk } from './Regions/IvanoFrankivsk/IvanoFrankivsk';
import { Chernivtsi } from './Regions/Chernivtsi/Chernivtsi';
import { Ternopil } from './Regions/Ternopil/Ternopil';
import { Khmelnitsk } from './Regions/Khmelnitsk/Khmelnitsk';
import { Rivne } from './Regions/Rivne/Rivne';
import { Vinnitsa } from './Regions/Vinnitsa/Vinnitsa';
import { Cherkasy } from './Regions/Cherkasy/Cherkasy';
import { Kirovograd } from './Regions/Kirovograd/Kirovograd';
import { Odessa } from './Regions/Odessa/Odessa';
import { Nikolaev } from './Regions/Nikolaev/Nikolaev';
import { Kherson } from './Regions/Kherson/Kherson';
import { Zaporozhye } from './Regions/Zaporozhye/Zaporozhye';
import { Dnepropetrovsk } from './Regions/Dnepropetrovsk/Dnepropetrovsk';
import { Poltava } from './Regions/Poltava/Poltava';
import { Summy } from './Regions/Summy/Summy';
import { Kharkov } from './Regions/Kharkov/Kharkov';
import { Lugansk } from './Regions/Lugansk/Lugansk';
import { Donetsk } from './Regions/Donetsk/Donetsk';
import { Crimea } from './Regions/Crimea/Crimea';

import { Location } from '../Location/Location';

import './Map.scss';

export const Map = () => {
    return (
        <svg
            className="map"
            version="1.2"
            viewBox="0 0 4960.6 3507.9"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <Kyiv />
                <Chernihiv />
                <Volyn />
                <Zhytomyr />
                <Lviv />
                <Zakarpattya />
                <IvanoFrankivsk />
                <Chernivtsi />
                <Ternopil />
                <Khmelnitsk />
                <Rivne />
                <Vinnitsa />
                <Cherkasy />
                <Kirovograd />
                <Odessa />
                <Nikolaev />
                <Kherson />
                <Zaporozhye />
                <Dnepropetrovsk />
                <Poltava />
                <Summy />
                <Kharkov />
                <Lugansk />
                <Donetsk />
                <Crimea />
            </g>

            {/* === МЕТКИ === */}
            {/* о. Змеиный */}
            <Location
                x="2250"
                y="3030"
                text={
                    <span className="location__text-center">
                        Історичне місце, де <strong>24 лютого 2022 року </strong> Українськими
                        війсковими було зазначено вектор напряму російському військовому кораблю!
                        <span className="location__warship">
                            «Русский военный корабль, иди на хуй!»
                        </span>
                    </span>
                }
            />
            {/* Потопленый корабыль */}
            <Location
                x="2400"
                y="2980"
                text={
                    <span className="location__text-center">
                        Місце, де російський військовий корабель
                        <strong className="location__display-b"> 🚀 москва 🚢</strong> пішов по
                        зазначеному раніше напрямку.
                    </span>
                }
            />
            {/* Чорнобаївка */}
            <Location
                x="2830"
                y="2420"
                text={
                    <span>
                        Чорнобаївка <strong className="location__text-center"> 🔥 18.0 </strong>
                    </span>
                }
            />
            {/* Рудий ліс */}
            <Location x="2200" y="600" text={'☢️ Рудий ліс'} />
            {/* === ./МЕТКИ === */}
        </svg>
    );
};
