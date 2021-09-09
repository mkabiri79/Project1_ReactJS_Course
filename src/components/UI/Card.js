import "./Card.css";
function Card(porps) {
  const clases = `card ${porps.className}`;
  return <div className={clases}>{porps.children}</div>;
}
export default Card;
