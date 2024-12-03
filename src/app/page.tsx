import Link from "next/link";

export default function Home() {
  return (
    <main className=" p-24">
        <ul>
            <li className={'p-2'}>На этом сайте вы можете исследовать вселенную внутри себя.</li>
            <li className={'p-2'}>Загляни в <Link href={'/encyclopedia'} className={'underline hover:decoration-indigo-500 '}>энциклопедию</Link> для получения знаний по энергетическим центрам.</li>
            <li className={'p-2'}>После, вы можете пройти <Link href={'/test'} className={'underline hover:decoration-indigo-500'}>тест</Link> чтобы визуализировать свое текущее состояние. Вы можете выяснить свой ведущий центр в вашем теле. И, что не менее важно, найти опустошенные центры. Те, что нуждаются в вашем внимании.</li>
            <li className={'p-2'}>В разделе <Link href={'/sources'} className={'underline hover:decoration-indigo-500'}>статьи</Link> вы найдете полезные техники для центров, чтобы вернуть им циркуляцию энергии.</li>
        </ul>
    </main>
  );
}
