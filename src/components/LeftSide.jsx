import "./FirstPage.css";

function LeftSide() {
  return (
    <div className="leftSide">
      <ul className="list-todo">
        <li>
          <span className="work"></span> <h3>work</h3>
        </li>
        <li>
          <span className="study"></span> <h3>study</h3>
        </li>
        <li>
          <span className="enter"></span> <h3>entertainment</h3>
        </li>
        <li>
          <span className="family"></span> <h3>family</h3>
        </li>
      </ul>
    </div>
  );
}

export default LeftSide;
