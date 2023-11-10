import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/Main";
import BottomNavbar from "./Components/Bottom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
      <BottomNavbar />
    </div>
  );
}

export default App;
