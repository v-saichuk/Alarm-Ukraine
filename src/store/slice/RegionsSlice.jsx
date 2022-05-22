import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    isActive: false,
    regions: {
        'Вінницька область': {
            enabled: false,
            districts: {
                'Вінницький район': {
                    enabled: false,
                },
                'Могилів-Подільський район': {
                    enabled: false,
                },
                'Жмеринський район': {
                    enabled: false,
                },
                'Гайсинський район': {
                    enabled: false,
                },
                'Тульчинський район': {
                    enabled: false,
                },
                'Хмільницький район': {
                    enabled: false,
                },
            },
        },
        'Волинська область': {
            enabled: false,
            districts: {
                'Луцький район': {
                    enabled: false,
                },
                'Ковельський район': {
                    enabled: false,
                },
                'Володимир-Волинський район': {
                    enabled: false,
                },
                'Камінь-Каширський район': {
                    enabled: false,
                },
            },
        },
        'Дніпропетровська область': {
            enabled: false,
            districts: {
                'Криворізький район': {
                    enabled: false,
                },
                'Павлоградський район': {
                    enabled: false,
                },
                'Кам’янський район': {
                    enabled: false,
                },
                'Синельниківський район': {
                    enabled: false,
                },
                'Новомосковський район': {
                    enabled: false,
                },
                'Дніпровський район': {
                    enabled: false,
                },
                'Нікопольський район': {
                    enabled: false,
                },
            },
        },
        'Донецька область': {
            enabled: false,
            districts: {
                'Покровський район': {
                    enabled: false,
                },
                'Краматорський район': {
                    enabled: false,
                },
                'Бахмутський район': {
                    enabled: false,
                },
                'Волноваський район': {
                    enabled: false,
                },
                'Маріупольський район': {
                    enabled: false,
                },
                'Донецький район': {
                    enabled: false,
                },
                'Кальміуський район': {
                    enabled: false,
                },
                'Горлівський район': {
                    enabled: false,
                },
            },
        },
        'Житомирська область': {
            enabled: false,
            districts: {
                'Бердичівський район': {
                    enabled: false,
                },
                'Житомирський район': {
                    enabled: false,
                },
                'Новоград-Волинський район': {
                    enabled: false,
                },
                'Коростенський район': {
                    enabled: false,
                },
            },
        },
        'Закарпатська область': {
            enabled: false,
            districts: {
                'Ужгородський район': {
                    enabled: false,
                },
                'Берегівський район': {
                    enabled: false,
                },
                'Тячівський район': {
                    enabled: false,
                },
                'Хустський район': {
                    enabled: false,
                },
                'Рахівський район': {
                    enabled: false,
                },
                'Мукачівський район': {
                    enabled: false,
                },
            },
        },
        'Запорізька область': {
            enabled: false,
            districts: {
                'Бердянський район': {
                    enabled: false,
                },
                'Запорізький район': {
                    enabled: false,
                },
                'Пологівський район': {
                    enabled: false,
                },
                'Василівський район': {
                    enabled: false,
                },
                'Мелітопольський район': {
                    enabled: false,
                },
            },
        },
        'Івано-Франківська область': {
            enabled: false,
            districts: {
                'Верховинський район': {
                    enabled: false,
                },
                'Івано-Франківський район': {
                    enabled: false,
                },
                'Калуський район': {
                    enabled: false,
                },
                'Надвірнянський район': {
                    enabled: false,
                },
                'Коломийський район': {
                    enabled: false,
                },
                'Косівський район': {
                    enabled: false,
                },
            },
        },
        'Київська область': {
            enabled: false,
            districts: {
                'Броварський район': {
                    enabled: false,
                },
                'Фастівський район': {
                    enabled: false,
                },
                'Бучанський район': {
                    enabled: false,
                },
                'Білоцерківський район': {
                    enabled: false,
                },
                'Обухівський район': {
                    enabled: false,
                },
                'Бориспільський район': {
                    enabled: false,
                },
                'Вишгородський район': {
                    enabled: false,
                },
            },
        },
        'Кіровоградська область': {
            enabled: false,
            districts: {
                'Кропивницький район': {
                    enabled: false,
                },
                'Голованівський район': {
                    enabled: false,
                },
                'Олександрійський район': {
                    enabled: false,
                },
                'Новоукраїнський район': {
                    enabled: false,
                },
            },
        },
        'Луганська область': {
            enabled: false,
            districts: {
                'Старобільський район': {
                    enabled: false,
                },
                'Сватівський район': {
                    enabled: false,
                },
                'Сєвєродонецький район': {
                    enabled: false,
                },
                'Щастинський район': {
                    enabled: false,
                },
            },
        },
        'Львівська область': {
            enabled: false,
            districts: {
                'Червоноградський район': {
                    enabled: false,
                },
                'Львівський район': {
                    enabled: false,
                },
                'Самбірський район': {
                    enabled: false,
                },
                'Дрогобицький район': {
                    enabled: false,
                },
                'Золочівський район': {
                    enabled: false,
                },
                'Стрийський район': {
                    enabled: false,
                },
                'Яворівський район': {
                    enabled: false,
                },
            },
        },
        'Миколаївська область': {
            enabled: false,
            districts: {
                'Первомайський район': {
                    enabled: false,
                },
                'Баштанський район': {
                    enabled: false,
                },
                'Миколаївський район': {
                    enabled: false,
                },
                'Вознесенський район': {
                    enabled: false,
                },
            },
        },
        'Одеська область': {
            enabled: false,
            districts: {
                'Одеський район': {
                    enabled: false,
                },
                'Подільський район': {
                    enabled: false,
                },
                'Березівський район': {
                    enabled: false,
                },
                'Болградський район': {
                    enabled: false,
                },
                'Білгород-Дністровський район': {
                    enabled: false,
                },
                'Роздільнянський район': {
                    enabled: false,
                },
                'Ізмаїльський район': {
                    enabled: false,
                },
            },
        },
        'Полтавська область': {
            enabled: false,
            districts: {
                'Полтавський район': {
                    enabled: false,
                },
                'Миргородський район': {
                    enabled: false,
                },
                'Кременчуцький район': {
                    enabled: false,
                },
                'Лубенський район': {
                    enabled: false,
                },
            },
        },
        'Рівненська область': {
            enabled: false,
            districts: {
                'Вараський район': {
                    enabled: false,
                },
                'Рівненський район': {
                    enabled: false,
                },
                'Сарненський район': {
                    enabled: false,
                },
                'Дубенський район': {
                    enabled: false,
                },
            },
        },
        'Сумська область': {
            enabled: false,
            districts: {
                'Роменський район': {
                    enabled: false,
                },
                'Сумський район': {
                    enabled: false,
                },
                'Шосткинський район': {
                    enabled: false,
                },
                'Охтирський район': {
                    enabled: false,
                },
                'Конотопський район': {
                    enabled: false,
                },
            },
        },
        'Тернопільська область': {
            enabled: false,
            districts: {
                'Тернопільський район': {
                    enabled: false,
                },
                'Чортківський район': {
                    enabled: false,
                },
                'Кременецький район': {
                    enabled: false,
                },
            },
        },
        'Харківська область': {
            enabled: false,
            districts: {
                'Ізюмський район': {
                    enabled: false,
                },
                'Харківський район': {
                    enabled: false,
                },
                'Лозівський район': {
                    enabled: false,
                },
                'Богодухівський район': {
                    enabled: false,
                },
                'Куп’янський район': {
                    enabled: false,
                },
                'Чугуївський район': {
                    enabled: false,
                },
                'Красноградський район': {
                    enabled: false,
                },
            },
        },
        'Херсонська область': {
            enabled: false,
            districts: {
                'Каховський район': {
                    enabled: false,
                },
                'Бериславський район': {
                    enabled: false,
                },
                'Скадовський район': {
                    enabled: false,
                },
                'Херсонський район': {
                    enabled: false,
                },
                'Генічеський район': {
                    enabled: false,
                },
            },
        },
        'Хмельницька область': {
            enabled: false,
            districts: {
                'Хмельницький район': {
                    enabled: false,
                },
                'Шепетівський район': {
                    enabled: false,
                },
                'Кам’янець-Подільський район': {
                    enabled: false,
                },
            },
        },
        'Черкаська область': {
            enabled: false,
            districts: {
                'Уманський район': {
                    enabled: false,
                },
                'Черкаський район': {
                    enabled: false,
                },
                'Звенигородський район': {
                    enabled: false,
                },
                'Золотоніський район': {
                    enabled: false,
                },
            },
        },
        'Чернівецька область': {
            enabled: false,
            districts: {
                'Вижницький район': {
                    enabled: false,
                },
                'Чернівецький район': {
                    enabled: false,
                },
                'Дністровський район': {
                    enabled: false,
                },
            },
        },
        'Чернігівська область': {
            enabled: false,
            districts: {
                'Ніжинський район': {
                    enabled: false,
                },
                'Чернігівський район': {
                    enabled: false,
                },
                'Прилуцький район': {
                    enabled: false,
                },
                'Новгород-Сіверський район': {
                    enabled: false,
                },
                'Корюківський район': {
                    enabled: false,
                },
            },
        },
        'м. Київ': {
            enabled: false,
        },
    },
    activeRegions: [],
};

export const alarmFetch = createAsyncThunk('regions/alarmFetch', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(
            'https://agile-bastion-75952.herokuapp.com/emapa.fra1.cdn.digitaloceanspaces.com/statuses.json',
            {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            },
        );
        const { states } = await response.json();
        console.log('RegionSlice.jsx', states);
        return states;
    } catch (e) {
        return rejectWithValue(e);
    }
});

const RegionsSlice = createSlice({
    name: 'regions',
    initialState,
    reducers: {
        onActive: (state, action) => {
            state.isActive = action.payload;
        },
        addedActiveRegions: (state, action) => {
            state.activeRegions = action.payload;
        },
    },
    extraReducers: {
        [alarmFetch.pending]: (state, action) => {},
        [alarmFetch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.regions = action.payload;
        },
        [alarmFetch.rejected]: (state, action) => {
            state.isLoading = false;
            console.log('Ошибка в url =>', action.payload);
        },
    },
});

export default RegionsSlice.reducer;
export const { onActive, addedActiveRegions } = RegionsSlice.actions;
