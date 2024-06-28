import globalStyle from "./globalStyle.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      On this site you can explore the universe inside yourself.
      Look at <Link href={'/encyclopedia'} className={'underline hover:decoration-indigo-500 '}>Encyclopedia</Link> for more information about energies centers.
        After you can take the <Link href={'/test'} className={'underline hover:decoration-indigo-500'}>test</Link> about your condition. You can evaluate the lead energy center in your body. And, witch is more important, find out empty center.
        If some practical is new for you try to find out helpful Link inside the <Link href={'/sources'} className={'underline hover:decoration-indigo-500'}>sources</Link>
    </main>
  );
}
