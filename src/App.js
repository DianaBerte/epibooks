import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import book from "./Books/fantasy.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks SingleBook={book} />
      <MyFooter />
    </div>
  );
}

export default App;
