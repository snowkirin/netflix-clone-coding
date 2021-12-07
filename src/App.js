import Billboard from "./components/Billboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import Rows from "./components/Rows";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Rows />
      <Footer />
    </div>
  );
}

export default App;
