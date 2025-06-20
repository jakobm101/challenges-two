import "./Card.css";

export default function Card({ name, children, color }) {
  let classes = `card`
  color? (classes += ` card--`+ color) : 0;
  console.log({classes},{color});
  
  return <p className={classes}>{children?? name?? 'NaF'}</p>;
}
