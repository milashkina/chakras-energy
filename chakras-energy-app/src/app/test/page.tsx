import Link from "next/link";
import globalStyle from "@/app/globalStyle.module.css";
import AnswerSection from "@/app/test/answer-section";
export default function Page () {
    return <section>
        <form className="flex flex-col items-center justify-between p-10">
            <span> You have to answer 60 questions. Try to give answers based on the real state of things, and not on how you want to see yourself. You don’t need to think about the answers for a long time; most often, the first thing that came after reading the question is the correct answer. Answers to questions - number. The higher it is, the more you agree with the expression. </span>
            <Link className={`${globalStyle.btn} m-7`} href={'#start'}>Ok, I&#39;m got it. Let&#39;s start!</Link>
            <AnswerSection />
            <input type={`submit`} />
        </form>
    </section>
}
