import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import "./FirstPage.css";
import LeftSide from "./LeftSide";
import MainCards from "./MainCards";

function SecondPage() {
  const [showInput, setShowInput] = useState(false);

  const showInputHandler = () => {
    setShowInput(!showInput);
    console.log(showInput);
  };
  return (
    <main>
      <div className="main">
        <Header showInputHandler={showInputHandler} />
        {showInput ? <TodoInput showInputHandler={showInputHandler} /> : ""}

        <section className="">
          <LeftSide />
          <MainCards />
        </section>
      </div>
    </main>
  );
}

export default SecondPage;
