import "./App.css";
import Initial from "./components/Initial";
import MoneyBar from "./components/MoneyBar";
import Questions from "./components/Questions";

function App() {

  return (
    <>
      <Initial>
        <Questions />
        <MoneyBar />
      </Initial>
    </>
  );
}

export default App;
