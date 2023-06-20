import logo from "./logo.svg";
import "./App.css";
import Toast from "./components/Toast/Toast";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <div className="App">
      <Toast />
      <Navbar />
      <Header/>
    </div>
  );
}

export default App;
