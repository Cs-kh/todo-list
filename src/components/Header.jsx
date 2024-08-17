import "./Header.css";

function Header(props) {
  // eslint-disable-next-line react/prop-types
  const { showInputHandler } = props;
  return (
    <div>
      <header className="header">
        <h1>Todo</h1>
        <button onClick={() => showInputHandler()}>+</button>
      </header>
    </div>
  );
}

export default Header;
