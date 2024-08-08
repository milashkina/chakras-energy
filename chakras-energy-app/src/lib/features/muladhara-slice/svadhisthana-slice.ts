import {createAppSlice} from "@/lib/create-app-slice";


export interface SvadhisthanaSliceState {
    value: number,
}

const initialState: SvadhisthanaSliceState = {
    value: 0,
}

export const SvadhisthanaSlice = createAppSlice({
    name: "test",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action) => {
            state.value += action.payload;
        })
    }),
    selectors: {
        selectSvadhisthana: (SvadhisthanaCounter) => SvadhisthanaCounter.state
    }
})

export const {add} = SvadhisthanaSlice.actions

export const {selectSvadhisthana} = SvadhisthanaSlice.selectors
