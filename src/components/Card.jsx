import "./Card.css";

function Card(props) {
  classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
