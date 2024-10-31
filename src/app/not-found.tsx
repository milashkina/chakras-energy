import Link from "next/link";


export default function notFound() {

    return (
        <div className={`flex flex-col gap-10 p-10 items-center`}>
            <span>sorry 404 page</span>
            <Link href={"/"} className={`underline hover:decoration-indigo-500`}>Home</Link>
        </div>
    )
}
