import "./FirstPage.css";
import TodoCard from "./TodoCard";

export default function MainCards(props) {
  // eslint-disable-next-line react/prop-types
  const { cardDetails } = props;
  return (
    <div className="mainCards">
      <TodoCard cardDetails={cardDetails} />
    </div>
  );
}
