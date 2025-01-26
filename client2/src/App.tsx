import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Clare", "Andrea", "Sean", "Tighernan"];

  const handleSelectItem = (item: string) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Friends"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

// this line exports the App function as the default export from this module
export default App;
