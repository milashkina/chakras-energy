import Link from "next/link";


export default function Page () {
    return <section className={'flex flex-col items-center justify-between p-24'}>
                <span>I am a contact Page</span>
                <Link href={"/"}>Home</Link>
            </section>
}
