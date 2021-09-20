import "./styles.css";
import react, { useState } from "react";

export default function App() {
  const emojis = {
    "😀": "Grinning Face",
    "😁": "Beaming Face with Smiling Eyes",
    "🤣": "Rolling on the Floor Laughing",
    "😉": "Winking Face",
    "🙃": "Upside-Down Face",
    "😐": "Neutral Face"
  };

  let [inputTxt, setInputTxt] = useState("");

  let [translatedTxt, setTranslatedTxt] = useState(
    "translation will appear here.."
  );

  let emojiArr = Object.keys(emojis);

  function inputChangeHandler(e) {
    // console.log(e.target.value);
    setInputTxt(e.target.value);

    if (emojis[e.target.value]) {
      return setTranslatedTxt(emojis[e.target.value]);
    }
    return setTranslatedTxt("failure to recognize emoji");
  }

  function clickHandler(emoji) {
    // console.log(emoji);
    setTranslatedTxt(emojis[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Search your emoji"
        onChange={inputChangeHandler}
        style={{
          padding: "0.6rem 0.3rem",
          width: "80%",
          fontSize: "1.2rem"
        }}
      ></input>

      <h2>{inputTxt}</h2>
      <h3>{translatedTxt}</h3>

      {emojiArr.map((emoji) => {
        return (
          <h1
            key={emoji}
            onClick={() => clickHandler(emoji)}
            style={{ display: "inline", padding: "0.4rem", cursor: "pointer" }}
          >
            {emoji}
          </h1>
        );
      })}
    </div>
  );
}
