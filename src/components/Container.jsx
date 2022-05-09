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

export const Container = () => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector((state) => state.alarmStore);

    useEffect(() => {
        dispatch(alarmFetch());
    }, []);

    return (
        <>
            {isLoading && <Loader />}

            <Header />

            <main>
                <Map />
                <TotalMines />
                <Information />
            </main>
            <Footer />
        </>
    );
};

// Домен для сайта
// alarm-ua.info
