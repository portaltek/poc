import "./App.css";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Carousel initIndex={-1} imagesDisplayed={1} />
      </div>
    </div>
  );
}

export default App;
