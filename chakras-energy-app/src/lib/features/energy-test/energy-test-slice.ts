import {createAppSlice} from "@/lib/create-app-slice";
import {AppThunkAction} from "@/lib/types";
import {PayloadAction} from "@reduxjs/toolkit";


export interface EnergyTestSliceState {
    value: number;
    muladhara: number;
    svadhisthana: number;
    manipura: number;
    anahata: number;
    vishuddha: number;
    ajna: number;
}

const initialState: EnergyTestSliceState = {
    value: 0,
    muladhara: 0,
    svadhisthana: 0,
    manipura: 0,
    anahata: 0,
    vishuddha: 0,
    ajna: 0,
}

export const EnergyTestSlice = createAppSlice({
    name: "muladharaCounter",
    initialState,
    reducers: (create) => ({
        increment: create.reducer((state) => {
            state.value +=1;
        }),
        decrement: create.reducer((state) => {
            state.value -= 1;
        }),
        incrementByAmount: create.reducer(
            (state, action: PayloadAction<number>) => {
                state.value += action.payload;
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

export const incrementIfOdd =
    (amount: number): AppThunkAction =>
        (dispatch, getState) => {
            const currentValue = selectMuladhara(getState());

            if (currentValue % 2 === 1 || currentValue % 2 === -1) {
                dispatch(incrementByAmount(amount));
            }
        }
