import "./Card.css";

export default function Card({ name, children, color }) {
  let classes = `card` + (color ? ` card--`+ color : ``);
  return <p className={classes}>{children?? name?? 'NaF'}</p>;
}
