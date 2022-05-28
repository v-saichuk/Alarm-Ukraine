// MODULES
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alarmFetch } from '../store/slice/RegionsSlice';

// COMPONENTS
import { Loader } from './Loader/Loader';
import { Header } from '../components/Header/Header';
import { Map } from './Map/Map';
import { TotalMines } from '../components/TotalMines/TotalMines';
import { Information } from './Information/Information';
import { Footer } from '../components/Footer/Footer';
import { AlarmBlock } from './Alarm/AlarmBlock/AlarmBlock';
import { WarsDay } from './WarsDay/WarsDay';

export const Container = () => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector((state) => state.alarmStore);

    useEffect(() => {
        dispatch(alarmFetch());

        // TODO: Автообновление
        // setInterval(() => {
        //     dispatch(alarmFetch());
        // }, 15000);
    }, [dispatch]);

    return (
        <>
            {isLoading && <Loader />}

            <Header />

            <main>
                <Map />
                <WarsDay />
                <TotalMines />
                <AlarmBlock />
                <Information />
            </main>
            <Footer />
        </>
    );
};

// Домен для сайта
// alarm-ua.info

// 1. Смена темы сайты
// 2. Мобильная версия сайта
// 3. Разказать друзьям, активировать кнопки
// 4. Автооновлення через N секунд (Оновиты)
// 5. Изменить цвет если в регионе больше часа тревога
// 6. Настроить правильный показ времени тревоги
// 7. + Исправить баг, не отображаются районы в информационном блоке тривог
// 8. Добавить пункт в блок информации из пункта 6
// 9. Добавить информационный блок О нас, FAQ или что-то на подобие
//  + 10. Заменить названия Областей на обычый текст, тем самым избавимся от лишнего кода, и выровняем как надо текст так же выровняем разминирование
// 11. Поработать над дизайном блок информации о разминировании при навидении на область.
