"use client"
import Link from "next/link";
import {useMemo, useState} from "react";
import dataQuestions from "@/app/data/data-questions-eng.json";
import {nanoid} from "nanoid";

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
                    <ul className={`p-2`}>
                      <li className={`p-2`}> Вам нужно будет ответить на 60 вопросов.</li>
                      <li className={`p-2`}>Старайтесь давать ответы основываясь на реальном
                        положении вещей, а не презентуя себя с лучших сторон.</li>
                      <li className={`p-2`}>Старайтесь не думать над ответами слишком
                        долго: чаще всего ответ пришедший в голову первым после прочтения - и есть правильный.</li>
                      <li className={`p-2`}> Ответ на
                        вопрос - число. Оно отображает ваше согласие с выражением. Чем больше число - тем больше ваше
                        согласие.</li>
                      <li className={`p-2`}>промежуточные результаты могут не сохраниться, поэтому если начали - доведите дело до конца.</li>
                    </ul>
                      <Link href={`${params.id}/1`} className={'underline hover:decoration-indigo-500'}>Я все понял, начинаем!</Link>
                  </div>
                }
                {isFinish &&
                  <Link href={'/resul'}>Результаты</Link>
                }
            </form>
    )
}
