import globalStyle from "@/app/globalStyle.module.css";

export default function Footer() {
    return <footer className={`${globalStyle.footer} p-8 font-bold`}>
        <span>This is just a training application. Author do this with two reasons: training to NEXT.js lib and figure out with energy inside chakras: which, where, how and etc.</span>
    </footer>
}
