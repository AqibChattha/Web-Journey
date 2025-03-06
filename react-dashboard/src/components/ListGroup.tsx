function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
