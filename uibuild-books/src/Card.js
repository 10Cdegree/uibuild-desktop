import "./Card.css";

const Book = (props) => (
  <div className="book">
    <div className="number">{props.number}</div>
    <div className="sub">{props.sub}</div>
    <div className="title">{props.title}</div>
    <div className="info">
      <div className="text">{props.text}</div>
    </div>
  </div>
);

export default Book;
