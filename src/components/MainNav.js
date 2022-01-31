import { useState } from "react";
import styles from "./MainNav.module.css";

const MainNav = (props) => {
  const [input, setInput] = useState("");
  // const [isClicked, setIsClicked] = useState(false);

  // const clickHandler = () => {
  //   setIsClicked(true);
  //   props.onSaveClick(isClicked);
  // };

  const inputHandler = (event) => {
    setInput(event.target.value);
    props.onSaveInputData(input);
  };
  return (
    <nav className={styles.navbar}>
      <a href="/MainPage">MovieRama</a>
      <div>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={inputHandler}
        />
        {/* <button onClick={clickHandler}>Search</button> */}
      </div>
    </nav>
  );
};

export default MainNav;
