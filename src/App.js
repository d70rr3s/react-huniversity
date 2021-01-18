import { Carousel } from "./Components/Carousel/Carousel";
import Data from "./data.json";

const App = () => {
  return (
    <>
      <h1>Heroes of Warcraft</h1>
      <span>We will see you on Azeroth.</span>
      <Carousel items={Data.deck.map(card => ({key: card.id, content: card.id}))} active={0}/>
    </>
  );
}

export default App;
