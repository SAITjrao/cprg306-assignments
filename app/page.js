import Link from "next/link"

export default function Home(){
  return (
    <main>
      <h1 className="text-2xl font-bold m-2">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col m-3 ml-5">
        <Link href="week-2">Week 2</Link>
        <Link href="week-3">Week 3</Link>
        <Link href="week-4">Week 4</Link>
        <Link href="week-5">Week 5</Link>
        <Link href="week-6">Week 6</Link>
        <Link href="week-7">Week 7</Link>
        <Link href="week-8">Week 8</Link>
        <Link href="week-9">Week 9</Link>
      </div>
    </main>
  );
}