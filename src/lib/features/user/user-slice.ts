import {createAppSlice} from "@/lib/create-app-slice";


export interface IUserSlice {
    id: number,
}

const initialState: IUserSlice = {
    id: 0,
}

export const UserSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: (create) => ({
        new: create.reducer((state) => {
            state.user.id = 1234567;
        }),
        delete: create.reducer( (state) => {
            state.user.id = 0;
        })
    }),
})

