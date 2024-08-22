import "./FirstPage.css";
import TodoCard from "./TodoCard";

export default function MainCards(props) {
  const { cardDetails } = props;
  return (
    <div className="mainCards">
      <TodoCard cardDetails={cardDetails} />
    </div>
  );
}
