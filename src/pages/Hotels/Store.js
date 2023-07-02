import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import hotelReducer from './hotelSlice';

    const store = configureStore({
        reducer: {
            hotel: hotelReducer,
        }
    });

    export default store;

    export const useAppDispatch = () => useDispatch();

