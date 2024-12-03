import Link from "next/link";
import globalStyle from "@/app/globalStyle.module.css";


export default function Header () {
    return <header className={`${globalStyle.header} flex justify-evenly items-center p-8 gap-2`}>
        <div>
            <Link href={'/'}>главная</Link>
        </div>
            <div>
                <Link href={'/encyclopedia'} className={'hover:text-indigo-500'}>статьи</Link>
            </div>
            <div>
                <Link href={'/contact'} className={'hover:text-indigo-500'}>контакты</Link>
            </div>
            <div>
                <Link href={'/sources'} className={'hover:text-indigo-500'}>источники</Link>
            </div>
            <Link href={`/test/1234567`}>
                <button className={`${globalStyle.btn}`}>тест</button>
            </Link>
            </header>
}
