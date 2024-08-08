import {createAppSlice} from "@/lib/create-app-slice";
import {AppThunkAction} from "@/lib/types";
import {PayloadAction} from "@reduxjs/toolkit";


export interface EnergyTestSliceState {
    score: number;
    muladhara: number[];
    svadhisthana: number[];
    manipura: number[];
    anahata: number[];
    vishuddha: number[];
    ajna: number[];
}

const initialState: EnergyTestSliceState = {
    score: 0,
    muladhara: [],
    svadhisthana: [],
    manipura: [],
    anahata: [],
    vishuddha: [],
    ajna: [],
}

export const EnergyTestSlice = createAppSlice({
    name: "test-slice",
    initialState,
    reducers: (create) => ({
        increment: create.reducer((state) => {
            state.score +=1;
        }),
        decrement: create.reducer((state) => {
            state.score -= 1;
        }),
        incrementByAmount: create.reducer(
            (state, action: PayloadAction<number>) => {
                state.score += action.payload;
            },
        ),
    }),
    selectors: {
        selectMuladhara: (muladharaCounter) => muladharaCounter.muladhara
    }
})

export const {increment, decrement, incrementByAmount} =
    EnergyTestSlice.actions;

export const {selectMuladhara} =
    EnergyTestSlice.selectors
