"use client";
import {END_QUEST, START_QUEST} from "@/lib/features/constant/questionnaire";

export interface IRunTest {
    readonly type: typeof START_QUEST
}

export interface IFinishTest {
    readonly  type: typeof END_QUEST
}

export type TUserQuestionnaire = IRunTest | IFinishTest

export const RunQuestionnaire = () =>({
    type: START_QUEST
})

export const FinishQuestionnaire = () => ({
    type: END_QUEST
})
