import { volumes } from "@/lib/data";
import Link from "next/link";

export default function Fellowship() {
const {title, description, books} = volumes[0]
      console.table(volumes[0]);
  return (
    <>
      <Link href={"/"}>All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>{books[0].ordinal + ' — ' + books[0].title}</li>
        <li>{books[1].ordinal + ' — ' + books[1].title}</li>
      </ul>
      
    </>
  );
}
