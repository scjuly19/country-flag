import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState();
  const dictionary = {
    "🇦🇨": "Ascension Island",
    "🇦🇩": "Andorra",
    "🇦🇪": "United Arab Emirates",
    "🇦🇫": "Afghanistan",
    "🇦🇬": "Antigua & Barbuda",
    "🇦🇮": "Anguilla",
    "🇦🇱": "Albania",
    "🇦🇲": "Armenia",
    "🇦🇴": "Angola",
    "🇦🇶": "Antarctica",
    "🇦🇷": "Argentina",
    "🇮🇪": "Ireland",
    "🇮🇳": "India",
    "🇮🇱": "Israel"
  };
  const list = Object.keys(dictionary);
  const emojiClickHandler = (emoji) => {
    setMeaning(dictionary[emoji]);
  };
  const onInputHandler = (event) => {
    let meaning = dictionary[event.target.value];
    if (!meaning) setMeaning("Sorry! We don't know what that means.");
    else setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={(event) => onInputHandler(event)} />
      <h3>{meaning}</h3>
      <h2>
        {list.map((item) => (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        ))}
      </h2>
    </div>
  );
}
