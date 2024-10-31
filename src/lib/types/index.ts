import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootReducer} from "@/lib/rootReducers";
import {TUserQuestionnaire} from "@/lib/features/actions/questionnaire";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;

export type TAppActions = TUserQuestionnaire

export type TQuestionsList = string[]
