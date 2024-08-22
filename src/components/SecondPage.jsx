import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import "./FirstPage.css";
import LeftSide from "./LeftSide";
import MainCards from "./MainCards";

function SecondPage() {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cardDetails, setCardDetails] = useState([]);

  const showInputHandler = () => {
    setShowInput(!showInput);
    console.log(showInput);
  };

  const addCardHandler = () => {
    const card = {
      title: title,
      description: description,
    };
    setCardDetails((prevCards) => [...prevCards, card]);
    setTitle("");
    setDescription("");
    setShowInput(false);
    console.log(cardDetails);
  };

  return (
    <main>
      <div className="main">
        <Header showInputHandler={showInputHandler} />
        {showInput && (
          <TodoInput
            showInputHandler={showInputHandler}
            addCardHandler={addCardHandler}
            setTitle={setTitle}
            setDescription={setDescription}
          />
        )}
        <section>
          <LeftSide />
          <MainCards cardDetails={cardDetails} />
        </section>
      </div>
    </main>
  );
}

export default SecondPage;
