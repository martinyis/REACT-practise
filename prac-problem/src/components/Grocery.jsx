import { useEffect, useState } from "react";
import styles from "./Grocery.module.css";
const Grocery = () => {
  const [checkOut, setCheckOut] = useState([
    [1, 4, 5],
    [3, 2, 2],
    [5, 6, 7],
    [1, 1, 1],
    [2, 2, 2],
  ]);
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState();
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleTempChange(event) {
    setTemp(event.target.value);
  }
  console.log(temp);
  function decreaseNum() {
    const updatedCheckOut = checkOut.map((arr) => {
      if (arr.length > 0) {
        if (arr[0] === 0) {
          return arr.slice(1); // remove the first element if it's zero
        } else {
          return [arr[0] - 1, ...arr.slice(1)]; // decrease the first number in the array
        }
      } else {
        return arr;
      }
    });
    setCheckOut(updatedCheckOut);
    setStatus(true);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      decreaseNum();
    }, 500); // run every half second (500 milliseconds)
    return () => clearInterval(intervalId);
  }, [checkOut]); // empty dependency array to only run on mount
  return (
    <div className={styles.grocApp}>
      <form action="">
        <input onChange={handleTempChange} value={temp} type="text" />
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <div className={styles.Grocery}>
        {checkOut.map((kasa, idx) => {
          return (
            <div key={idx} className={styles.kasa}>
              {kasa.map((number, idx) => {
                return (
                  <p key={idx} className={styles.number}>
                    {number}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grocery;
