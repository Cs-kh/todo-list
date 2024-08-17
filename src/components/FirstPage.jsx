import "./FirstPage.css";
import { Link } from "react-router-dom";
export default function FirstPage() {
  return (
    <main>
      <div className="first-page">
        <div className="">
          <h1>
            <span className="span-1 span">t</span>
            <span className="span-2 span">o</span>
            <span className="span-3 span">d</span>
            <span className="span-4 span">o</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            minima?Lorem ipsum dolor sit amet lorem
          </p>
          <Link to="/todo">
            <button>get started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
