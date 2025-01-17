import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MyRoutes from "./components/MyRoutes";
import "./App.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;