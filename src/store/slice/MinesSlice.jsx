import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const minesFetch = createAsyncThunk('mines/minesFetch', async (_, { rejectWithValue }) => {
    try {
        const responce = await fetch('https://dsns.gov.ua/api/demining', { method: 'GET' });
        const { data } = await responce.json();
        return data;
    } catch (e) {
        rejectWithValue();
        console.log('MINES ERROR => ', e);
    }
});

const initialState = {
    isActive: false,
    isLoading: false,
    load: false,
    error: false,
    mines: {
        regions: [
            {
                region_id: 1,
                region_name: 'Вінницька',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 2,
                region_name: 'Волинська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 3,
                region_name: 'Дніпропетровська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 4,
                region_name: 'Донецька',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 5,
                region_name: 'Житомирська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 6,
                region_name: 'Закарпатська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 7,
                region_name: 'Запорізька',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 8,
                region_name: 'Івано-Франківська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 9,
                region_name: 'Київ',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 10,
                region_name: 'Київська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 11,
                region_name: 'Кіровоградська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 12,
                region_name: 'Луганська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 13,
                region_name: 'Львівська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },

            {
                region_id: 14,
                region_name: 'Миколаївська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 15,
                region_name: 'Одеська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 16,
                region_name: 'Полтавська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 17,
                region_name: 'Рівненська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 18,
                region_name: 'Сумська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 19,
                region_name: 'Тернопільська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 20,
                region_name: 'Харківська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 21,
                region_name: 'Херсонська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 22,
                region_name: 'Хмельницька',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 23,
                region_name: 'Черкаська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 24,
                region_name: 'Чернігівська',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
            {
                region_id: 25,
                region_name: 'Чернівецька',
                statistics: {
                    day: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                    total: {
                        covered_territory: 0,
                        vnp: 0,
                        bomb: 0,
                        number_involvement: 0,
                    },
                },
            },
        ],
        total: {
            day: {
                bomb: 0,
                covered_territory: 0,
                number_involvement: 0,
                vnp: 0,
            },
            total: {
                bomb: 0,
                covered_territory: 0,
                number_involvement: 0,
                vnp: 0,
            },
        },
    },
};

const MinesSlice = createSlice({
    name: 'mines',
    initialState,
    reducers: {
        handleMinins: (state, action) => {
            state.isActive = action.payload;
        },
    },
    extraReducers: {
        [minesFetch.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
            state.load = false;
        },
        [minesFetch.fulfilled]: (state, action) => {
            state.mines = action.payload;
            state.isLoading = false;
            state.load = true;
        },
        [minesFetch.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
            state.load = false;
        },
    },
});

export default MinesSlice.reducer;

export const { handleMinins } = MinesSlice.actions;
