import "./TodoInput.css";

function TodoInput(props) {
  // eslint-disable-next-line react/prop-types
  const { showInputHandler } = props;
  return (
    <div className="modal">
      <article className="modal-container">
        <header className="modal-container-header">
          <h1 className="modal-container-title">Add Todo</h1>
          <button className="icon-button" onClick={() => showInputHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              />
            </svg>
          </button>
        </header>
        <section className="modal-container-body rtf">
          <div className="input-block">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="title"
            />
          </div>

          <div className="description">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name=""
              id="description"
              placeholder="description"
            />
          </div>
        </section>
        <footer className="modal-container-footer">
          <button
            className="button is-ghost"
            onClick={() => showInputHandler()}
          >
            Close
          </button>
          <button className="button is-primary">Add</button>
        </footer>
      </article>
    </div>
  );
}

export default TodoInput;
