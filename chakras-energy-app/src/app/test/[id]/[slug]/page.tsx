import AnswerSection from "@/app/test/[id]/[slug]/answer-section";
import globalStyle from "@/app/globalStyle.module.css";


type Props = {
    params: {
        id: string;
        slug: string;
    };
};
export default function Page({ params }: Props) {
   // const questions_list = params.questions
   // console.log('questions_list: '+questions_list)
    console.log('params.slug: ' + params.slug)
    return (
        <div>
            <h1>Post: {params.id}</h1>
            <h1>Comment: {params.slug}</h1>
            <div className={`p-10`} >
                {/* {questions_list.map(question => <div>{question}</div>)}*/}
                {/*  {questions_list && <span>{questions_list[0]}</span>}*/}
                {/*  {questions.array.map((question) =>
                    <span>{question}</span>
                )}*/}
                <div className={`flex gap-6`}>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'1'} id={''}/>
                        <label htmlFor={'questions_1'}>1</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'2'} id={''}/>
                        <label htmlFor={'questions_2'}>2</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'3'} id={''}/>
                        <label htmlFor={'questions_3'}>3</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'4'} id={''}/>
                        <label htmlFor={'questions_4'}>4</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'5'} id={''}/>
                        <label htmlFor={'questions_5'}>5</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'6'} id={''}/>
                        <label htmlFor={'questions_6'}>6</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'7'} id={''}/>
                        <label htmlFor={'questions_7'}>7</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'8'} id={''}/>
                        <label htmlFor={'questions_8'}>8</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'9'} id={''}/>
                        <label htmlFor={'questions_9'}>9</label>
                    </div>
                    <div className={`flex gap-2`}>
                        <input type={'radio'} name={'questions'} value={'10'}/>
                        <label htmlFor={'questions_10'}>10</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <input className={`${globalStyle.btn} m-7`} type={`button`} value={`go`}/>
            </div>
        </div>
    )
}
