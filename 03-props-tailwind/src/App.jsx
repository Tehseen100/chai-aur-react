import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="mb-5">Hello World!</h1>
      <Card name="Card 1" description="card 1 description" />
      <Card name="Card 2" description="card 2 description" />
      <Card description="card 3 description" />
    </>
  );
}

export default App;
