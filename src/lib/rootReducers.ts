import {combineSlices} from "@reduxjs/toolkit";
import {EnergyTestSlice} from "@/lib/features/energy-test/energy-test-slice";
import {SvadhisthanaSlice} from "@/lib/features/muladhara-slice/svadhisthana-slice";
import {UserSlice} from "@/lib/features/user/user-slice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
export const rootReducer = combineSlices(
    EnergyTestSlice,
    SvadhisthanaSlice,
    UserSlice,);

