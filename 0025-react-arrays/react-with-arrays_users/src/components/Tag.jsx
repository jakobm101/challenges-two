import "./Tag.css";

export default function Tag({ tag, className }) {
  return <li className={"tag " + className}>{tag}</li>;
}
