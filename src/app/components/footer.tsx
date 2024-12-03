import globalStyle from "@/app/globalStyle.module.css";
import Link from "next/link";
import Image from "next/image";
import TG from "../data/img/svg/telegram-svgrepo-com.svg"

export default function Footer() {
    return <footer className={`${globalStyle.footer} p-8 font-bold`}>
        <div className={`flex flex-row gap-2 align-baseline`}>Для личной диагностики писать
            <Link href={"https://t.me/Flora_rami"} target={"_blank"} >
                <Image
                    src={TG}
                    alt={'icon click write telegram'}
                    className={`animate-pulse`}
                    width={32}
                    height={32}
                /></Link></div>
    </footer>
}
