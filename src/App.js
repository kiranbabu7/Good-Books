import "./App.css";
import { useState } from "react";

function App() {
  const [currentGenre, setCurrentGenre] = useState("Biryani");
  function genreClickHandler(event) {
    let newGenre = event.target.innerText;
    setCurrentGenre(newGenre);
  }

  const foodCollection = {
    Biryani: [
      { name: "Dum Biryani", rating: "4/5" },
      { name: "Kalmi Biryani", rating: "5 / 5" },
    ],
    Pizza: [
      { name: "Chicken Supreme", rating: "3.5/5" },
      { name: "Tandoori Paneer", rating: "4/5" },
    ],
    Chicken: [
      { name: "Chicken Lolipop", rating: "5/5" },
      { name: "Chicken Tandoori", rating: "4/5" },
    ],
  };
  const genres = Object.keys(foodCollection);
  console.log(foodCollection[currentGenre]);
  return (
    <div className="App">
      <h1>Junk Food</h1>
      <p>Select a Genre to get Started</p>
      <div className="buttons">
        {genres.map((genre) => {
          return (
            <button key={genre} onClick={genreClickHandler}>
              {genre}
            </button>
          );
        })}
      </div>
      <div className="container">
        <ul>
          {foodCollection[currentGenre].map((item) => {
            return (
              <li>
                <div>Name: {item.name}</div>
                <div>Rating: {item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
