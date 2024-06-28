import Link from "next/link";


export default function notFound() {

    return (
        <div>
            <span>sorry 404</span>
            <Link href={"/"} >Home</Link>
        </div>
    )
}
