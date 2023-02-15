import logo from "./logo.svg";
import "./App.css";
import HeaderSection from "./Components/Header";
import FooterSection from "./Components/Footer";
import StartSection from "./Components/StartSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <div className=" flex items-center justify-center w-4/6">
        <StartSection />
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
