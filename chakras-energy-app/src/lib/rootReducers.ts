import {combineSlices} from "@reduxjs/toolkit";
import {EnergyTestSlice} from "@/lib/features/energy-test/energy-test-slice";
import {SvadhisthanaSlice} from "@/lib/features/muladhara-slice/svadhisthana-slice";

export const rootReducer = combineSlices(
    EnergyTestSlice,
    SvadhisthanaSlice,);

