import Link from "next/link";
import globalStyle from "@/app/globalStyle.module.css";


export default function Header () {
    return <header className={`${globalStyle.header} flex justify-evenly items-center p-8`}>
        <div>
            <Link href={'/'}>HOME</Link>
        </div>
            <div>
                <Link href={'/encyclopedia'} className={'hover:text-indigo-500'}>encyclopedia</Link>
            </div>
            <div>
                <Link href={'/contact'} className={'hover:text-indigo-500'}>contact</Link>
            </div>
            <div>
                <Link href={'/sources'} className={'hover:text-indigo-500'}>sources</Link>
            </div>
            <Link href={'/test'}>
                <button className={`${globalStyle.btn}`}>test</button>
            </Link>
            </header>
}
