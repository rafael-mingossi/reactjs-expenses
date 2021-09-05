import './Card.css';

//this is a Wrapper Component only, using props.children

export default function Card(props) {
  //the const CLASSES is joining the content of class .card and all the properties of className of the component you are using <Card/>
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}
