import { useState } from "react";

//  { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item" string) => void;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook - lets us tap into builtin React features
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Bootstrap ListGroup component
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === items.indexOf(item)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // this line exports the ListGroup function as the default export from this module
