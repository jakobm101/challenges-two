import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Towers() {
  const { title, description, books, cover } = volumes[1];
  return (
    <>
      <Link href={"/"}>All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>{books[0].ordinal + " — " + books[0].title}</li>
        <li>{books[1].ordinal + " — " + books[1].title}</li>
      </ul>
      <Image src={cover} alt="book-cover" width={140} height={230} />
    </>
  );
}
