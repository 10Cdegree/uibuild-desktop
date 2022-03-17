import Book from "./Card";
import books from "./bookDatas";
import NavBar from "./NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="cont">
        <div className="books">
          {books.map((book, index) => (
            <Book number={index} key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
