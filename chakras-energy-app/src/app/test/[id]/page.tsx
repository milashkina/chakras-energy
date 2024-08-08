"use client"
import Link from "next/link";
import globalStyle from "@/app/globalStyle.module.css";
import AnswerSection from "@/app/test/[id]/[slug]/answer-section";
import {useMemo, useState} from "react";
import dataQuestions from "@/app/data/data-questions.json";
import {nanoid, random} from "nanoid";

type Props = {
    params: {
        id: '1234567';
    };
};
export default function TestPage ({params}: Props) {
    const [isStart, setStart] = useState(false)
    const [isFinish, setFinish] = useState(false)

    const questions = useMemo(() => dataQuestions.filter((elem) => elem[0] === 'muladhara'), [dataQuestions])
    console.log('questions: '+questions)

    const slug = () => {
       return nanoid(7)
    }
    return (
            <form className="flex flex-col items-center justify-between p-10">
                {!isStart &&
                  <div className="flex flex-col items-center justify-between">
                    <span> You have to answer 60 questions. Try to give answers based on the real state of things, and not on how you want to see yourself. You don’t need to think about the answers for a long time; most often, the first thing that came after reading the question is the correct answer. Answers to questions - number. The higher it is, the more you agree with the expression. </span>
                    <Link href={`${params.id}/1`} className={`underline hover:decoration-indigo-500`}>Ok, I&#39;m got it. Let&#39;s start!</Link>
                  </div>
                }
                {isFinish &&
                  <Link href={'/resul'}>check result</Link>
                }
            </form>
    )
}
