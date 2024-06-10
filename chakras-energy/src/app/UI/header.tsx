import Link from "next/link";
import globalStyle from "@/app/globalStyle.module.css";


export default function Header () {
    return <section className={`${globalStyle.header} flex justify-evenly items-center p-8`}>
                <div>

                </div>
                <div>
                    <Link href={'/contact'}>contact</Link>
                </div>
                <div>
                    <Link href={'/chakras-info'}>info</Link>
                </div>
                <div>
                    <Link href={'/buy-book'}>sources</Link>
                </div>
                <Link href={'/test'}>
                    <button className={`${globalStyle.btn}`}>test</button>
                </Link>
            </section>
}
