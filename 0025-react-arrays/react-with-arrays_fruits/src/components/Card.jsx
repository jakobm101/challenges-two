import "./Card.css";

export default function Card({ name, children }) {
  return <p className="card">{children?? name?? 'NaF'}</p>;
}
