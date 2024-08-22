import "./TodoCard.css";

function TodoCard(props) {
  // eslint-disable-next-line react/prop-types
  const { cardDetails } = props;

  // eslint-disable-next-line react/prop-types
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
