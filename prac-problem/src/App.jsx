import "./App.css";
import styles from "./App.module.css";
import Grocery from "./components/Grocery";

function App() {
  return (
    <div className={styles.App}>
      <Grocery />
    </div>
  );
}

export default App;
