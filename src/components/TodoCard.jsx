import "./TodoCard.css";

function TodoCard(props) {
  const { cardDetails } = props;

  if (!cardDetails || cardDetails.length === 0) {
    return <p>No cards available</p>;
  }

  return (
    <div>
      <div className="cards">
        {cardDetails.map((card) => (
          <div className="card" key={card.id || card.title}>
            <div className="cardTitle">
              <h2>{card.title || "Untitled"}</h2>
              <button>...</button>
            </div>
            <p>{card.description || "No description available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoCard;
